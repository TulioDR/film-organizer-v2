import StoreModel from "@/models/StoreModel";
import { AnimationControls, motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
   id: string;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   isHovered: boolean;
   cardRef: React.RefObject<HTMLDivElement>;
   scaleControls: AnimationControls;
   exitStyle: React.CSSProperties;
};

export default function Container({
   children,
   id,
   onHoverStart,
   onHoverEnd,
   isHovered,
   cardRef,
   scaleControls,
   exitStyle,
}: Props) {
   const { backgroundImage } = useSelector(
      (state: StoreModel) => state.background
   );
   const hideCard = !!backgroundImage && !isHovered;
   const controls = useAnimationControls();
   useEffect(() => {
      const transition = { duration: 0.2 };
      if (hideCard) controls.start({ opacity: 0, transition });
      else controls.start({ opacity: 1, transition });
   }, [hideCard]);

   useEffect(() => {
      const transition = { duration: 0.4 };
      if (isHovered) controls.start({ rotateY: 180, transition });
      else controls.start({ rotateY: 360, transition });
   }, [isHovered, controls]);

   const handleUpdate = (e: any) => {
      if (e.rotateY === 360) {
         controls.set({ rotateY: 0, transition: { duration: 0 } });
      }
   };
   const MAIN_DURATION = 0.4;

   return (
      <motion.div id={id} ref={cardRef} className="aspect-[2/3]">
         <motion.div
            layout
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            style={exitStyle}
            transition={{ duration: MAIN_DURATION }}
            className="aspect-[2/3] "
         >
            <motion.div
               animate={scaleControls}
               transition={{ duration: MAIN_DURATION }}
               className="origin-top-left [perspective:2000px] aspect-[2/3]"
            >
               <motion.div
                  animate={controls}
                  onUpdate={handleUpdate}
                  className="relative [transform-style:preserve-3d]"
               >
                  {children}
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
