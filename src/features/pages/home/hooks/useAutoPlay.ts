import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

export default function useAutoPlay(
   navigateMedia: (direction: "forward" | "backward") => void,
) {
   const [scope, animate] = useAnimate();
   const [isAutoPlay, setIsAutoPlay] = useState(true);

   const startAutoPlay = () => setIsAutoPlay(true);
   const stopAutoPlay = () => setIsAutoPlay(false);

   const [booleanValue, setBooleanValue] = useState(true);

   const isFirstRender = useRef(true);
   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false;
         return;
      }
      navigateMedia("forward");
   }, [booleanValue, navigateMedia]);

   useEffect(() => {
      if (!isAutoPlay) return;
      const el = scope.current;
      if (!el) return;
      const runAnimation = async () => {
         while (isAutoPlay) {
            await animate(
               el,
               { pathLength: 1 },
               { duration: 6, ease: "linear" },
            );
            await animate(el, { rotateX: 180 }, { duration: 0 });
            setBooleanValue((prev) => !prev);
            await animate(el, { pathLength: 0 }, { duration: 0.5 });
            await animate(el, { rotateX: 0 }, { duration: 0 });
         }
      };
      runAnimation();
      return () => {
         const endingAnimation = async () => {
            await animate(el, { pathLength: 0 }, { duration: 0.5 });
            animate(el, { rotateX: 0 }, { duration: 0 });
         };
         endingAnimation();
      };
   }, [isAutoPlay, animate, scope]);

   return { isAutoPlay, startAutoPlay, stopAutoPlay, scope };
}
