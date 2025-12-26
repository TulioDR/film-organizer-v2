import { useState } from "react";

export default function useRatedFilter() {
   const initialRated = [0, 10];
   const [minRated, setMinRated] = useState<number>(initialRated[0]);
   const [maxRated, setMaxRated] = useState<number>(initialRated[1]);

   const resetRated = () => {
      setMinRated(initialRated[0]);
      setMaxRated(initialRated[1]);
   };

   return {
      minRated,
      maxRated,
      setMinRated,
      setMaxRated,
      resetRated,
   };
}
