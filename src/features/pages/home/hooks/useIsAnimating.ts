import { useEffect, useState } from "react";
import { HOME_DURATION } from "../constants/ANIMATIONS";
import { Media } from "@/common/models/Media";

export default function useIsAnimating(media: Media) {
   const [isAnimating, setIsAnimating] = useState(false);

   useEffect(() => {
      setIsAnimating(true);
      const timer = setTimeout(
         () => setIsAnimating(false),
         HOME_DURATION * 1000 + 50,
      );
      return () => clearTimeout(timer);
   }, [media]);

   return { isAnimating };
}
