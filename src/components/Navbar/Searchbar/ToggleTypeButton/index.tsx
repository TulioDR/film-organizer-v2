import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import StoreModel from "@/models/StoreModel";
import { useState } from "react";
import ToggleTypeTooltip from "./ToggleTypeTooltip";
import ToggleTypeIcon from "./ToggleTypeIcon";

type Props = {
   isMovie: boolean;
   onClick: () => void;
};

export default function ToggleTypeButton({ isMovie, onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   const [showTooltip, setShowTooltip] = useState<boolean>(false);

   const handleHoverStart = () => setShowTooltip(true);
   const handleHoverEnd = () => setShowTooltip(false);

   return (
      <motion.button
         variants={popUpAnimation}
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         onMouseDown={(e) => e.preventDefault()}
         type="button"
         onClick={onClick}
         className="h-full w-10 flex items-center gap-1 group rounded-r-lg z-10 text-white relative"
         style={{ backgroundColor: themeColor }}
      >
         <ToggleTypeIcon isMovie={isMovie} />
         <AnimatePresence>
            {showTooltip && <ToggleTypeTooltip isMovie={isMovie} />}
         </AnimatePresence>
      </motion.button>
   );
}
