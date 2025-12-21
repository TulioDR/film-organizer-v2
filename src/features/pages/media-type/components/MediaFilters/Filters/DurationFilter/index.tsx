import React from "react";
import FilterCard from "../../FilterCard";
import RangeInput from "../../RangeSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";

type Props = {};

export default function DurationFilter({}: Props) {
   const { minDuration, maxDuration, setMinDuration, setMaxDuration } =
      useMediaFilterContext();
   return (
      <FilterCard icon="timer" name="Duration range">
         <RangeInput
            globalMin={0}
            globalMax={400}
            step={20}
            markedSteps={[40, 140, 260, 360]}
            label="Minutes"
            minVal={minDuration}
            maxVal={maxDuration}
            setMinVal={setMinDuration}
            setMaxVal={setMaxDuration}
         />
      </FilterCard>
   );
}
