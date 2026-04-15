import React from "react";
import { motion } from "framer-motion";

type Props = {
   name: string;
   children: React.ReactNode;
   className?: string;
   icon: string | React.ReactNode;
};

export default function MainFilterCard({
   name,
   children,
   className = "",
   icon,
}: Props) {
   return (
      <motion.div
         layout
         className={`rounded-md bg-background-light dark:bg-background-accent-dark p-4 flex flex-col gap-4 
            ${className}
         `}
      >
         <div className="flex items-center gap-2">
            {typeof icon === "string" ? (
               <span className="material-symbols-outlined">{icon}</span>
            ) : (
               icon
            )}
            <span className="text-lg font-semibold mr-2">{name}</span>
         </div>
         <div className="flex-1 flex items-center justify-center w-full text-black/70 dark:text-white/70">
            {children}
         </div>
      </motion.div>
   );
}
