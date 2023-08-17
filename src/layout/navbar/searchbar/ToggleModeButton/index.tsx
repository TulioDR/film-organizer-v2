import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import StoreModel from "@/models/StoreModel";
import { useState } from "react";
import ToggleModeTooltip from "./ToggleModeTooltip";

type Props = {
   isMovie: boolean;
   onClick: () => void;
};

export default function ToggleModeButton({ isMovie, onClick }: Props) {
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
         className="h-full w-9 flex items-center gap-1 relative group rounded-lg -mr-5 z-10 text-white"
         style={{ backgroundColor: themeColor, y: -8 }}
      >
         <div className="overflow-hidden">
            <div
               className={`flex items-center h-full duration-300 relative ${
                  isMovie ? "" : "-translate-x-full"
               }`}
            >
               <span className="material-icons !w-9">movie</span>
               <span className="material-icons absolute left-full !w-9">
                  smart_display
               </span>
            </div>
         </div>
         <AnimatePresence>
            {showTooltip && <ToggleModeTooltip isMovie={isMovie} />}
         </AnimatePresence>
      </motion.button>
   );
}
