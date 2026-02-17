import useScrollToTop from "@/common/hooks/useScrollToTop";
import useAppSelector from "@/store/hooks/useAppSelector";
import { stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";
import cardAnimation from "../../../animations/cardAnimation";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
   setDirection: (direction: "prev" | "next" | "default") => void;
   direction: "prev" | "next" | "default";
};

export default function DesktopCardsGrid({
   children,
   isOpen,
   direction,
   setDirection,
}: Props) {
   useScrollToTop();

   const { isHidden } = useAppSelector((state) => state.layout);

   const [scope, animate] = useAnimate();
   const [isPresent, safeToRemove] = usePresence();
   useEffect(() => {
      const startAnimation = async () => {
         await animate(".media-card", cardAnimation[direction].animate, {
            delay: stagger(0.08),
            duration: 0.3,
         });
         setDirection("default");
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
   }, [isPresent, direction, cardAnimation]);

   return (
      <div className="w-full mt-20 overflow-hidden pb-24 px-4 lg:px-32 pt-32">
         <div
            ref={scope}
            className={`gap-4 grid ${
               isOpen
                  ? "grid-cols-2 min-[1400px]:grid-cols-3 min-[1700px]:grid-cols-4 pl-[426px]"
                  : "grid-cols-3 min-[1400px]:grid-cols-4 min-[1700px]:grid-cols-5"
            }`}
         >
            {children}
         </div>
      </div>
   );
}
