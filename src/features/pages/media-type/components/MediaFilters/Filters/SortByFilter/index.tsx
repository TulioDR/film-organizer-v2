import React from "react";
import FilterCard from "../../FilterCard";
import CustomSelect from "./CustomSelect";

type Props = {};

export default function SortByFilter({}: Props) {
   return (
      <FilterCard name="Sort by">
         <CustomSelect />
      </FilterCard>
   );
}
