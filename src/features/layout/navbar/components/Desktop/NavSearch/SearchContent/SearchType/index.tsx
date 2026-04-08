import { Action, State } from "@/features/layout/navbar/models/ReducerModels";
import React from "react";
import SearchTypeButton from "./SearchTypeButton";

type Props = {
   dispatch: React.Dispatch<Action>;
   state: State;
};

export default function SearchType({ dispatch, state }: Props) {
   const handleTypeChange = (type: "movie" | "tv") => {
      dispatch({ type: "CHANGE_MEDIA_TYPE", payload: type });
   };

   const { mediaType } = state;

   return (
      <div className="p-4 gap-4 flex font-semibold border-b border-border-light dark:border-border-dark">
         <SearchTypeButton
            isSelected={mediaType === "movie"}
            text="Movies"
            onClick={() => handleTypeChange("movie")}
         />
         <SearchTypeButton
            isSelected={mediaType === "tv"}
            text="Series"
            onClick={() => handleTypeChange("tv")}
         />
      </div>
   );
}
