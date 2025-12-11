import React, { useState } from "react";
import CustomRangeInput from "./CustomRangeInput";
import CustomStep from "./CustomStep";

type Props = {
   globalMin: number;
   globalMax: number;
   initialRange: [number, number];
   step: number;
   markedSteps: number[];
   label: string;
};

export default function RangeInput({
   globalMin,
   globalMax,
   initialRange,
   step,
   markedSteps,
   label,
}: Props) {
   const initialMin = Math.max(globalMin, initialRange[0]);
   const initialMax = Math.min(globalMax, initialRange[1]);

   const [minVal, setMinVal] = useState<number>(initialMin);
   const [maxVal, setMaxVal] = useState<number>(initialMax);

   const handleMinChange = (e: any) => {
      const newMin = Number(e.target.value);
      setMinVal(Math.min(newMin, maxVal));
   };

   const handleMaxChange = (e: any) => {
      const newMax = Number(e.target.value);
      setMaxVal(Math.max(newMax, minVal));
   };

   const totalRange = globalMax - globalMin;
   const selectedRangeWidth = maxVal - minVal;

   const rangeWidth = (selectedRangeWidth / totalRange) * 100;
   const rangeLeft = ((minVal - globalMin) / totalRange) * 100;

   const getPossibleValues = () => {
      const values = [];
      let currentValue = globalMin;

      while (currentValue <= globalMax) {
         values.push(currentValue);
         currentValue += step;
         currentValue = Number(currentValue.toFixed(4));
      }
      return values;
   };
   const possibleValues = getPossibleValues();

   return (
      <>
         <div className="w-full flex flex-col pb-9">
            <div className="h-9 w-full  flex items-center justify-center font-bold text-lg">
               {`${label}: ${minVal} - ${maxVal}`}
            </div>
            <div className="w-full h-9 flex items-center  relative px-3">
               <div className="w-full h-full flex items-center justify-between relative">
                  {possibleValues.map((value, i) => (
                     <CustomStep
                        key={`${i}-${value}`}
                        isSelected={markedSteps.includes(value)}
                        value={value}
                     />
                  ))}
                  <div className="absolute h-2 w-full bg-background-accent-dark dark:bg-background-accent-light" />
               </div>
               <div
                  className="absolute h-2 bg-accent rounded-lg left-0 pointer-events-none"
                  style={{ left: `${rangeLeft}%`, width: `${rangeWidth}%` }}
               ></div>
               <CustomRangeInput
                  min={globalMin}
                  max={globalMax}
                  value={minVal}
                  step={step}
                  onChange={handleMinChange}
               />
               <CustomRangeInput
                  min={globalMin}
                  max={globalMax}
                  value={maxVal}
                  step={step}
                  onChange={handleMaxChange}
               />
            </div>
         </div>
      </>
   );
}
