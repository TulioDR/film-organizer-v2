import StoreModel from "@/models/StoreModel";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
   id: string;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   isHovered: boolean;
};

export default function Container({
   children,
   id,
   onHoverStart,
   onHoverEnd,
   isHovered,
}: Props) {
   const controls = useAnimationControls();

   useEffect(() => {
      const DURATION = 0.4;
      const transition = { duration: DURATION };
      if (isHovered) controls.start({ rotateY: 180, transition });
      else controls.start({ rotateY: 360, transition });
   }, [isHovered, controls]);

   const handleUpdate = (e: any) => {
      if (e.rotateY === 360) {
         controls.set({ rotateY: 0, transition: { duration: 0 } });
      }
   };

   const { backgroundImage } = useSelector(
      (state: StoreModel) => state.background
   );
   const hideCard = !!backgroundImage && !isHovered;

   return (
      <motion.article
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         exit={{ pointerEvents: "none" }}
         style={{ perspective: "2000px" }}
         className="outline-none"
         animate={{ opacity: hideCard ? 0 : 1, transition: { duration: 0.2 } }}
      >
         <motion.div
            id={id}
            animate={controls}
            onUpdate={handleUpdate}
            style={{ transformStyle: "preserve-3d" }}
            className="relative"
         >
            {children}
         </motion.div>
      </motion.article>
   );
}
