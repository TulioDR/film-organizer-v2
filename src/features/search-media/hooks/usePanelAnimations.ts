import { useAnimate } from "framer-motion";
import { useState } from "react";

export default function usePanelAnimations() {
   const [scope, animate] = useAnimate();
   const [overflow, setOverflow] = useState(false);
   const [showBorder, setShowBorder] = useState(false);

   const onUpdate = (e: any) => {
      const percentage = e.x;
      const number = Math.trunc(Number(percentage.replace("%", "")));
      if (number === 100 || number === -100) {
         setShowBorder(false);
         return;
      }
      setShowBorder(number >= 0);
   };

   const openAnimation = async () => {
      const duration = 0.4;
      animate(".first", { x: "0%" }, { duration });
      await animate(".second", { x: "0%" }, { duration });
      setOverflow(true);
   };
   const closeAnimation = async () => {
      const duration = 0.4;
      setOverflow(false);
      animate(".first", { x: "-100%" }, { duration });
      await animate(".second", { x: "100%" }, { duration });
      animate(".second", { x: "-100%" }, { duration: 0 });
      animate(".first", { x: "100%" }, { duration: 0 });
   };

   return {
      scope,
      overflow,
      showBorder,
      openAnimation,
      closeAnimation,
      onUpdate,
   };
}
