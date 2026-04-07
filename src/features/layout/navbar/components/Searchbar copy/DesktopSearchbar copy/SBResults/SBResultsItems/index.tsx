import React, { useCallback, useRef } from "react";
import SBItemsContainer from "./SBItemsContainer";
import SBResultsItem from "./SBResultsItem";
import { LenisRef } from "lenis/react";
import calculateNewIndex from "@/features/layout/navbar/utils/calculateResultIndex";
import scrollItemIntoView from "@/features/layout/navbar/utils/scrollItemIntoView";
import getActionKey from "@/features/layout/navbar/utils/getActionKey";
import { Action, State } from "@/features/layout/navbar/models/ReducerModels";

type Props = {
   dispatch: React.Dispatch<Action>;
   state: State;
   results: any[];
   length: number;
};
const COLUMNS = 2;

export default function SBResultsItems({
   dispatch,
   state,
   results,
   length,
}: Props) {
   const { currentIndex, mediaType } = state;

   const lenisRef = useRef<LenisRef>(null);

   const handleKey = useCallback(
      (e: KeyboardEvent) => {
         const action = getActionKey(e.key);
         if (!action) return;

         if (currentIndex !== null) e.preventDefault();

         const newI = calculateNewIndex(currentIndex, action, length, COLUMNS);
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
      ]
   );

   return (
      <SBItemsContainer lenisRef={lenisRef} handleKey={handleKey}>
         {results!.map((media, index) => (
            <SBResultsItem
               key={media.id}
               href={`/${mediaType}/${media.id}`}
               onMouseEnter={() =>
                  dispatch({
                     type: "SET_CURRENT_INDEX",
                     payload: index,
                  })
               }
               isSelected={index === currentIndex}
               media={media}
            />
         ))}
      </SBItemsContainer>
   );
}
