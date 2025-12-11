import React from "react";
import FilterCard from "../../FilterCard";
import RangeInput from "../../RangeSelector";

type Props = {};

export default function RatingFilter({}: Props) {
   return (
      <FilterCard name="Rating Range">
         <RangeInput
            globalMin={0}
            globalMax={10}
            step={1}
            markedSteps={[0, 5, 10]}
            initialRange={[0, 10]}
            label="Rated"
         />
      </FilterCard>
   );
}
