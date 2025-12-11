import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "../SortByFilter/CustomSelect";

type Props = {};

export default function OriginCountryFilter({}: Props) {
   return (
      <FilterCard name="Origin country">
         <div className="w-full px-2">
            <CustomSelect />
         </div>
      </FilterCard>
   );
}
