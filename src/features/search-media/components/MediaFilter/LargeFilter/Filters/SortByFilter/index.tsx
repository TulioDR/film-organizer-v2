import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "./CustomSelect";

type Props = {};

export default function SortByFilter({}: Props) {
   return (
      <FilterCard name="Sort by">
         <div className="w-full px-2">
            <CustomSelect />
         </div>
      </FilterCard>
   );
}
