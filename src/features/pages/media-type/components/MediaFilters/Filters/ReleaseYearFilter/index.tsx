import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../SortByFilter/CustomSelect";

type Props = {
   small?: true;
};

export default function ReleaseYearFilter({ small }: Props) {
   return (
      <FilterCard
         name="Release date"
         className={`${small ? "" : " col-span-2"}`}
      >
         <div className="w-full px-2">
            <CustomSelect />
         </div>
      </FilterCard>
   );
}
