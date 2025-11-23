import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../SortByFilter/CustomSelect";

type Props = {};

export default function OriginalLanguageFilter({}: Props) {
   return (
      <FilterCard name="Original language">
         <div className="w-full px-2">
            <CustomSelect />
         </div>
      </FilterCard>
   );
}
