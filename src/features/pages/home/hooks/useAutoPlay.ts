import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

export default function useAutoPlay(
   navigateMedia: (direction: "forward" | "backward") => void,
) {
   const [scope, animate] = useAnimate();
   const [isAutoPlay, setIsAutoPlay] = useState(true);

   const startAutoPlay = () => setIsAutoPlay(true);
   const stopAutoPlay = () => setIsAutoPlay(false);

   const [booleanValue, setBooleanValue] = useState(true);

   useEffect(() => {
      navigateMedia("forward");
   }, [booleanValue]);

   useEffect(() => {
      if (!isAutoPlay) return;
      const { current } = scope;
      if (!current) return;
      const runAnimation = async () => {
         while (isAutoPlay) {
            await animate(
               current,
               { pathLength: 1 },
               { duration: 4, ease: "linear" },
            );
            await animate(current, { rotateX: 180 }, { duration: 0 });
            setBooleanValue((prev) => !prev);
            await animate(current, { pathLength: 0 }, { duration: 0.5 });
            await animate(current, { rotateX: 0 }, { duration: 0 });
         }
      };
      runAnimation();
      return () => {
         const endingAnimation = async () => {
            await animate(current, { pathLength: 0 }, { duration: 0.5 });
            animate(current, { rotateX: 0 }, { duration: 0 });
         };
         endingAnimation();
      };
   }, [isAutoPlay, animate, scope]);

   return { isAutoPlay, startAutoPlay, stopAutoPlay, scope };
}
