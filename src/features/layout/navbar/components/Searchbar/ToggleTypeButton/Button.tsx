import StoreModel from "@/models/StoreModel";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = {
   icon: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function Button({ icon, isSelected, onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const [showTooltip, setShowTooltip] = useState<boolean>(false);
   const handleHoverStart = () => setShowTooltip(true);
   const handleHoverEnd = () => setShowTooltip(false);
   return (
      <motion.button
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         type="button"
         onClick={onClick}
         className={`h-full aspect-square flex items-center justify-center relative hover:bg-white
            ${isSelected ? "" : "hover:text-black"}
         `}
      >
         {isSelected && (
            <motion.div
               layoutId="searchTypeAnimation"
               className="absolute top-0 left-0 w-full h-full p-2"
               transition={{ duration: 0.6, type: "spring" }}
            >
               <div
                  style={{ backgroundColor: themeColor }}
                  className="rounded-md w-full h-full"
               />
            </motion.div>
         )}
         <span className="material-symbols-outlined relative">{icon}</span>
      </motion.button>
   );
}
