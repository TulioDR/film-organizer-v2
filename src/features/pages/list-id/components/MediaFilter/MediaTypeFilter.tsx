import React from "react";
import FilterButton from "./FilterButton";
import { TypeFilterModel } from "../../models/MediaFilterModel";

type Props = {
   selectedType: TypeFilterModel;
   setSelectedType: React.Dispatch<React.SetStateAction<TypeFilterModel>>;
};

export default function MediaTypeFilter({
   selectedType,
   setSelectedType,
}: Props) {
   return (
      <div className="flex gap-3">
         <FilterButton
            isSelected={selectedType === "all"}
            onClick={() => setSelectedType("all")}
         >
            All
         </FilterButton>
         <FilterButton
            isSelected={selectedType === "movie"}
            onClick={() => setSelectedType("movie")}
         >
            Movies
         </FilterButton>
         <FilterButton
            isSelected={selectedType === "tv"}
            onClick={() => setSelectedType("tv")}
         >
            Series
         </FilterButton>
      </div>
   );
}
