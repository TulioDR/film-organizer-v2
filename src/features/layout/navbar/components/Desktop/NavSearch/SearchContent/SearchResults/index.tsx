import ReactLenis, { LenisRef } from "lenis/react";
import React, { useCallback, useEffect, useRef } from "react";
import ResultCard from "./ResultCard";
import { Action, State } from "@/features/layout/navbar/models/ReducerModels";
import getActionKey from "@/features/layout/navbar/utils/getActionKey";
import calculateNewIndex from "@/features/layout/navbar/utils/calculateResultIndex";
import scrollItemIntoView from "@/features/layout/navbar/utils/scrollItemIntoView";
import { useRouter } from "next/router";

type Props = {
   state: State;
   dispatch: React.Dispatch<Action>;
};

export default function SearchResults({ state, dispatch }: Props) {
   const { results, mediaType, currentIndex } = state;
   const router = useRouter();

   const lenisRef = useRef<LenisRef>(null);
   const gridRef = useRef<HTMLDivElement>(null);

   const handleKey = useCallback(
      (e: KeyboardEvent) => {
         if (!gridRef.current) return;
         if (!results) return;
         const action = getActionKey(e.key);
         if (!action) return;

         if (action === "ENTER") {
            if (currentIndex === null) return;
            const id = results[currentIndex].id;
            router.push(`/${mediaType}/${id}`);
         }

         if (currentIndex !== null) e.preventDefault();

         const styles = window.getComputedStyle(gridRef.current);

         const gridTemplate = styles.getPropertyValue("grid-template-columns");
         const columns = gridTemplate.split(" ").filter((v) => v !== "").length;
         const newI = calculateNewIndex(
            currentIndex,
            action,
            results.length,
            columns,
         );
         if (newI !== null && newI !== currentIndex) {
            scrollItemIntoView(newI, lenisRef, results);
         }
         dispatch({ type: "SET_CURRENT_INDEX", payload: newI });
      },
      [
         length,
         scrollItemIntoView,
         currentIndex,
         results,
         calculateNewIndex,
         dispatch,
      ],
   );

   useEffect(() => {
      document.addEventListener("keydown", handleKey);
      return () => {
         document.removeEventListener("keydown", handleKey);
      };
   }, [handleKey]);

   const changeIndex = (index: number) => {
      dispatch({ type: "SET_CURRENT_INDEX", payload: index });
   };

   return (
      <ReactLenis
         ref={lenisRef}
         style={{ overscrollBehavior: "contain" }}
         className="w-full h-full overflow-auto"
      >
         <div ref={gridRef} className="w-full h-max grid xl:grid-cols-2 p-2">
            {results!.map((media, index) => (
               <ResultCard
                  key={media.id}
                  media={media}
                  href={`/${mediaType}/${media.id}`}
                  isSelected={index === currentIndex}
                  onMouseEnter={() => changeIndex(index)}
               />
            ))}
         </div>
      </ReactLenis>
   );
}
