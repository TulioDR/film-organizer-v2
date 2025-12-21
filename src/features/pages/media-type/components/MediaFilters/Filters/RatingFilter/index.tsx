import React from "react";
import FilterCard from "../../FilterCard";
import RangeInput from "../../RangeSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";

type Props = {};

export default function RatingFilter({}: Props) {
   const { minRated, maxRated, setMinRated, setMaxRated } =
      useMediaFilterContext();
   return (
      <FilterCard icon="star_rate" name="Rating Range">
         <RangeInput
            globalMin={0}
            globalMax={10}
            step={1}
            markedSteps={[0, 5, 10]}
            minVal={minRated}
            maxVal={maxRated}
            setMinVal={setMinRated}
            setMaxVal={setMaxRated}
            label="Rated"
         />
      </FilterCard>
   );
}
