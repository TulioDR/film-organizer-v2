import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../SortByFilter/CustomSelect";

type Props = {};

export default function ReleaseYearFilter({}: Props) {
   return (
      <FilterCard name="Release date" className="col-span-2">
         <div className="w-full px-2">
            <CustomSelect />
         </div>
      </FilterCard>
   );
}
