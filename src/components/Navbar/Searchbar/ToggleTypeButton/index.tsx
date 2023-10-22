import { useSelector } from "react-redux";
import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import StoreModel from "@/models/StoreModel";
import { useState } from "react";
import ToggleTypeTooltip from "./ToggleTypeTooltip";
import ToggleTypeIcon from "./ToggleTypeIcon";

type Props = {
   isMovie: boolean;
   onClick: () => void;
   inputControls: AnimationControls;
   innerInputAnimation: AnimationControls;
};

export default function ToggleTypeButton({
   isMovie,
   onClick,
   inputControls,
   innerInputAnimation,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   const [showTooltip, setShowTooltip] = useState<boolean>(false);

   const handleHoverStart = () => setShowTooltip(true);
   const handleHoverEnd = () => setShowTooltip(false);

   const onAnimationComplete = async (definition: any) => {
      if (definition !== "animate") return;
      await inputControls.start({
         width: "100%",
         transition: { duration: 0.5 },
      });
      return await innerInputAnimation.start({
         opacity: 1,
         transition: { duration: 0.5 },
      });
   };

   return (
      <motion.button
         variants={popUpAnimation}
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         onMouseDown={(e) => e.preventDefault()}
         onAnimationComplete={onAnimationComplete}
         type="button"
         onClick={onClick}
         className="absolute left-0 top-0 h-full w-10 group z-10 text-white rounded-lg"
         style={{ backgroundColor: themeColor }}
      >
         <div className="relative w-full h-full flex items-center gap-1">
            <ToggleTypeIcon isMovie={isMovie} />
            <AnimatePresence>
               {showTooltip && <ToggleTypeTooltip isMovie={isMovie} />}
            </AnimatePresence>
         </div>
      </motion.button>
   );
}
