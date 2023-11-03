import React from "react";
import MediaFilterModel from "../../models/MediaFilterModel";

type Props = {
   selectedType: MediaFilterModel;
};

export default function NoSavedMediaMessage({ selectedType }: Props) {
   const isAll = selectedType === "all";
   const isMovie = selectedType === "movie";
   const isTv = selectedType === "tv";

   return (
      <div className="text-xs sm:text-sm md:text-base">
         {isAll && <span>This list is so empty...</span>}
         {isMovie && <span>There is no movies in this list</span>}
         {isTv && <span>There is no series in this list</span>}
      </div>
   );
}
