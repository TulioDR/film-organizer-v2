import React from "react";
import { motion } from "framer-motion";

type Props = {
   top?: true;
   bottom?: true;
   children: React.ReactNode;
   className?: string;
};

export default function NavbarContainer({
   top,
   bottom,
   children,
   className = "",
}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className={`w-full z-20 fixed left-0 pointer-events-auto
         bg-white dark:bg-black h-14 xl:h-20
         border-border-light dark:border-border-dark 
         flex xl:py-4 px-4 lg:px-32
         ${className}
         ${top ? "top-0 border-y" : ""}
         ${bottom ? "bottom-0 border-y" : ""}
         ${!top && !bottom ? "top-0 border-b" : ""}
      `}
      >
         {children}
      </motion.div>
   );
}
