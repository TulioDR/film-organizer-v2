import React from "react";

import { motion } from "framer-motion";
import { sideLinkAnimation } from "@/animations/SidebarAnimations";
type Props = {
   isSelected: boolean;
   children: React.ReactNode;
   isMainLink?: true;
};

export default function SideInnerItemContainer({
   isSelected,
   children,
   isMainLink,
}: Props) {
   return (
      <>
         <motion.div
            variants={isMainLink ? sideLinkAnimation : undefined}
            className={`flex items-center justify-between w-full overflow-hidden ${
               isSelected
                  ? "text-light-1 dark:text-dark-1"
                  : "text-light-2 hover:text-light-1 dark:text-dark-2 dark:hover:text-dark-1"
            }`}
         >
            {children}
         </motion.div>
      </>
   );
}
