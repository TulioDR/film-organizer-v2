import { useState } from "react";

export default function useDurationFilter() {
   const initialDuration = [0, 400];
   const [minDuration, setMinDuration] = useState<number>(initialDuration[0]);
   const [maxDuration, setMaxDuration] = useState<number>(initialDuration[1]);

   const resetDuration = () => {
      setMinDuration(initialDuration[0]);
      setMaxDuration(initialDuration[1]);
   };

   return {
      minDuration,
      maxDuration,
      setMinDuration,
      setMaxDuration,
      resetDuration,
   };
}
