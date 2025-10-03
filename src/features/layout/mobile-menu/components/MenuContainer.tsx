import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   onExitComplete: () => void;
   isOpen: boolean;
   position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
   children: React.ReactNode;
};

export default function MenuContainer({
   onExitComplete,
   isOpen,
   position,
   children,
}: Props) {
   let clipPath = "";
   if (position === "topLeft") {
      clipPath = "inset(0% 100% 100% 0%)";
   }
   if (position === "topRight") {
      clipPath = "inset(0% 0% 100% 100%)";
   }
   if (position === "bottomLeft") {
      clipPath = "inset(100% 100% 0% 0%)";
   }
   if (position === "bottomRight") {
      clipPath = "inset(100% 0% 0% 100%)";
   }

   return (
      <AnimatePresence onExitComplete={onExitComplete}>
         {isOpen && (
            <div className="absolute inset-0 z-30 rounded-md overflow-hidden pointer-events-auto">
               <motion.div
                  initial={{ clipPath: clipPath }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ clipPath: clipPath }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full h-full bg-gray-200 text-black relative"
               >
                  {children}
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );
}
