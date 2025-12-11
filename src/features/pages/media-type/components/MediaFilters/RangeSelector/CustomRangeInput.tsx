import React from "react";

type Props = {
   min: number;
   max: number;
   value: number;
   onChange: (e: any) => void;
   step: number;
};

export default function CustomRangeInput({
   min,
   max,
   value,
   onChange,
   step,
}: Props) {
   return (
      <input
         type="range"
         min={min}
         max={max}
         step={step}
         value={value}
         onChange={onChange}
         style={{ padding: "0" }}
         className="absolute w-full h-full appearance-none bg-transparent pointer-events-none left-0 z-10 
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:aspect-square
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-accent
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow-lg
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-runnable-track]:bg-transparent"
      />
   );
}
