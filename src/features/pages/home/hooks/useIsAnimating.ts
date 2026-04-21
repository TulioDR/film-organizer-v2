import { useEffect, useState } from "react";
import { HOME_DURATION } from "../constants/ANIMATIONS";

export default function useIsAnimating(mediaIndex: number) {
   const [isAnimating, setIsAnimating] = useState(false);

   useEffect(() => {
      setIsAnimating(true);
      const timer = setTimeout(
         () => setIsAnimating(false),
         HOME_DURATION * 1000 + 100,
      );
      return () => clearTimeout(timer);
   }, [mediaIndex]);

   return { isAnimating };
}
