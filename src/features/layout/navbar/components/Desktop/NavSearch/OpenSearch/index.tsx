import React from "react";
import { motion } from "framer-motion";
import SEARCH_ANIMATION_DURATION from "@/features/layout/navbar/constants/SEARCH_ANIMATION_DURATION";

type Props = {
   onClick: () => void;
};

export default function OpenSearch({ onClick }: Props) {
   return (
      <motion.button
         onClick={onClick}
         layoutId="search-border-wrapper"
         transition={{ duration: SEARCH_ANIMATION_DURATION }}
         style={{ borderRadius: 100 }}
         className="h-full w-full p-px bg-border-light dark:bg-border-dark hover:bg-black dark:hover:bg-white block overflow-hidden"
      >
         <motion.div
            layoutId="search-background-inner"
            transition={{ duration: SEARCH_ANIMATION_DURATION }}
            style={{ borderRadius: 100 }}
            className="w-full h-full bg-white dark:bg-black"
         >
            <div className="h-full aspect-square flex items-center justify-center">
               <motion.div
                  layoutId="nav-search-icon"
                  transition={{ duration: SEARCH_ANIMATION_DURATION }}
                  className="h-10 aspect-square flex items-center justify-center"
               >
                  <span className="material-symbols-outlined">search</span>
               </motion.div>
            </div>
         </motion.div>
      </motion.button>
   );
}
