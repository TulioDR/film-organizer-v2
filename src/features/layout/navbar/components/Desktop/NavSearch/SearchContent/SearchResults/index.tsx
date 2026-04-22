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
   results: any[];
};

export default function SearchResults({ state, dispatch, results }: Props) {
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
            if (state.currentIndex === null) return;
            const id = results[state.currentIndex].id;
            router.push(`/${state.mediaType}/${id}`);
         }

         if (state.currentIndex !== null) e.preventDefault();

         const styles = window.getComputedStyle(gridRef.current);

         const gridTemplate = styles.getPropertyValue("grid-template-columns");
         const columns = gridTemplate.split(" ").filter((v) => v !== "").length;
         const newI = calculateNewIndex(
            state.currentIndex,
            action,
            results.length,
            columns,
         );
         if (newI !== null && newI !== state.currentIndex) {
            scrollItemIntoView(newI, lenisRef, results);
         }
         dispatch({ type: "SET_CURRENT_INDEX", payload: newI });
      },
      [results, dispatch, state.mediaType, router, state.currentIndex],
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
            {results.map((media, index) => (
               <ResultCard
                  key={media.id || index}
                  media={media}
                  href={`/${state.mediaType}/${media.id}`}
                  isSelected={index === state.currentIndex}
                  onMouseEnter={() => changeIndex(index)}
               />
            ))}
         </div>
      </ReactLenis>
   );
}
