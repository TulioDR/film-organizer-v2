import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavigationModel } from "@/features/layout/sidebar/models/NavigationModels";

type Props = {
   item: NavigationModel;
};

export default function NavItem({ item }: Props) {
   const [isHovered, setIsHovered] = useState(false);

   const onMouseEnter = () => setIsHovered(true);
   const onMouseLeave = () => setIsHovered(false);

   return (
      <motion.div
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         className="h-full px-4 hover:bg-black dark:hover:bg-white flex items-center justify-center relative"
      >
         <div
            className={`w-full h-full flex items-center justify-center ${
               isHovered
                  ? "text-white dark:text-black"
                  : "text-black dark:text-white"
            }`}
         >
            <span className="uppercase tracking-widest text-sm">
               {item.text}
            </span>
            {/* <span className="material-symbols-outlined">{item.icon}</span> */}
         </div>
         {/* {isHovered && (
            <div className="bg-white absolute top-full left-1/2 -translate-x-1/2 translate-y-2 rounded-md h-12 w-40 flex items-center justify-center px-4">
               <span className="text-center text-black font-semibold">
                  {item.text}
               </span>
            </div>
         )} */}
      </motion.div>
   );
}
