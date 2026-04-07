import { Action } from "@/features/layout/navbar/models/ReducerModels";
import React from "react";

type Props = {
   dispatch: React.Dispatch<Action>;
};

export default function SearchType({ dispatch }: Props) {
   const handleTypeChange = (type: "movie" | "tv") => {
      dispatch({ type: "CHANGE_MEDIA_TYPE", payload: type });
   };

   return (
      <div className="p-4 gap-4 flex font-semibold border-b border-border-light dark:border-border-dark">
         <button
            onClick={() => handleTypeChange("movie")}
            className="uppercase tracking-widest text-black dark:text-white"
         >
            Movies
         </button>
         <button
            onClick={() => handleTypeChange("tv")}
            className="uppercase tracking-widest text-black/50 dark:text-white/50"
         >
            Series
         </button>
      </div>
   );
}
