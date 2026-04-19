import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import { motion } from "framer-motion";

type Props = {
   overview: string;
   onClick: () => void;
};

export default function Overview({ overview, onClick }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 1.1 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 1.1 }}
         transition={{ duration: 0.2 }}
         style={{ borderRadius: STANDARD_RADIUS - 1 }}
         className="absolute inset-0 overflow-hidden bg-background-light dark:bg-background-accent-dark border border-black dark:border-white z-20 flex flex-col gap-1"
      >
         <div className="h-12 w-full flex items-center justify-between pl-4">
            <h2 className="text-sm xl:text-base text-black dark:text-white tracking-widest font-semibold">
               Overview
            </h2>
            <button
               onClick={onClick}
               className={`h-full aspect-square rounded-bl-md border-b border-l flex items-center justify-center
                  text-black dark:text-white
               border-black dark:border-white
               hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black
               active:bg-black dark:active:bg-white active:text-white dark:active:text-black
            `}
            >
               <span className="material-symbols-outlined">close</span>
            </button>
         </div>
         <div className="text-xs xl:text-sm leading-tight text-black/50 dark:text-white/50 p-4 pt-1">
            {overview}
         </div>
         <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-background-light dark:from-background-accent-dark to-transparent" />
      </motion.div>
   );
}
