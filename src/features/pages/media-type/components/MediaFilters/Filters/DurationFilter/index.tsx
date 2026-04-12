import FilterCard from "../../FilterCard";
import RangeInput from "../../RangeSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { DURATION_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import {
   DURATION_GLOBAL_MAX,
   DURATION_GLOBAL_MIN,
} from "@/features/pages/media-type/constants/FILTER_GLOBAL_RANGE";

type Props = {};

export default function DurationFilter({}: Props) {
   const { state, dispatch } = useMediaFilterContext();

   const changeMinValue = (value: number) => {
      dispatch({ type: "SET_DURATION", payload: [value, state.maxDuration] });
   };
   const changeMaxValue = (value: number) => {
      dispatch({ type: "SET_DURATION", payload: [state.minDuration, value] });
   };

   return (
      <FilterCard icon={DURATION_ICON} name="Duration range">
         <RangeInput
            globalMin={DURATION_GLOBAL_MIN}
            globalMax={DURATION_GLOBAL_MAX}
            step={20}
            markedSteps={[40, 140, 260, 360]}
            label="Minutes"
            minVal={state.minDuration}
            maxVal={state.maxDuration}
            setMinVal={changeMinValue}
            setMaxVal={changeMaxValue}
         />
      </FilterCard>
   );
}
