import React from "react";
import FilterCard from "../../FilterCard";
import RangeInput from "../../RangeSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { RATING_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import {
   RATING_GLOBAL_MAX,
   RATING_GLOBAL_MIN,
} from "@/features/pages/media-type/constants/FILTER_GLOBAL_RANGE";

type Props = {};

export default function RatingFilter({}: Props) {
   const { state, dispatch } = useMediaFilterContext();

   const changeMinValue = (value: number) => {
      dispatch({ type: "SET_RATING", payload: [value, state.maxRated] });
   };
   const changeMaxValue = (value: number) => {
      dispatch({ type: "SET_RATING", payload: [state.minRated, value] });
   };

   return (
      <FilterCard icon={RATING_ICON} name="Rating Range">
         <RangeInput
            globalMin={RATING_GLOBAL_MIN}
            globalMax={RATING_GLOBAL_MAX}
            step={1}
            markedSteps={[0, 5, 10]}
            minVal={state.minRated}
            maxVal={state.maxRated}
            setMinVal={changeMinValue}
            setMaxVal={changeMaxValue}
            label="Rated"
         />
      </FilterCard>
   );
}
