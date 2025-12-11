import React from "react";
import FilterCard from "../../FilterCard";
import RangeInput from "../../RangeSelector";

type Props = {};

export default function DurationFilter({}: Props) {
   return (
      <FilterCard name="Duration range">
         <RangeInput
            globalMin={0}
            globalMax={400}
            step={20}
            markedSteps={[40, 140, 260, 360]}
            initialRange={[40, 80]}
            label="Minutes"
         />
      </FilterCard>
   );
}
