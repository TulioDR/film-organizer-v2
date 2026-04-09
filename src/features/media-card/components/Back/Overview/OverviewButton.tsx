import React from "react";
import { motion } from "framer-motion";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   onClick: () => void;
};

export default function OverviewButton({ onClick }: Props) {
   return (
      <motion.button
         onClick={onClick}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`w-full h-full px-4 flex items-center justify-center border
            bg-background-light dark:bg-background-accent-dark
            border-border-light dark:border-border-dark
            hover:border-black dark:hover:border-white
            active:border-black dark:active:border-white
         `}
      >
         <span className="text-sm">Overview</span>
      </motion.button>
   );
}
