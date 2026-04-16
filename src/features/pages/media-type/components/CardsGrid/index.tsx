import useScrollToTop from "@/common/hooks/useScrollToTop";
import { stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import cardAnimation from "../../animations/cardAnimation";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
   setDirection?: (direction: "prev" | "next" | "default") => void;
   direction?: "prev" | "next" | "default";
};

export default function CardsGrid({
   children,
   isOpen,
   direction = "default",
   setDirection,
}: Props) {
   useScrollToTop();

   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();
   useEffect(() => {
      const startAnimation = async () => {
         await animate(".media-card", cardAnimation[direction].animate, {
            delay: stagger(0.08, { from: "first" }),
            duration: 0.3,
         });
         console.log("set default");
         if (setDirection) setDirection("default");
      };
      const closeAnimation = async () => {
         if (isPresent) return;
         await animate(".media-card", cardAnimation[direction].exit, {
            delay: stagger(0.04, { from: "last" }),
            duration: 0.3,
         });
         safeToRemove();
      };
      if (isPresent) startAnimation();
      else closeAnimation();
   }, [isPresent, cardAnimation]);

   return (
      <div
         ref={scope}
         className={`py-14 xl:py-0 xl:pt-4 grid gap-1 xl:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${
            isOpen
               ? "xl:grid-cols-2 min-[1400px]:grid-cols-3 min-[1700px]:grid-cols-4"
               : "xl:grid-cols-3 min-[1400px]:grid-cols-4 min-[1700px]:grid-cols-5"
         }`}
      >
         {children}
      </div>
   );
}
