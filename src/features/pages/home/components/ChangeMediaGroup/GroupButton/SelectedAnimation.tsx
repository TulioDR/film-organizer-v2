import React from "react";
import { motion } from "framer-motion";
import { HOME_TRANSITION } from "../../../constants/ANIMATIONS";

type Props = {
   isSelected: boolean;
};

export default function SelectedAnimation({ isSelected }: Props) {
   return (
      <svg
         width="100%"
         height="100%"
         className="block overflow-visible absolute inset-0 pointer-events-none"
      >
         <motion.rect
            width="100%"
            height="100%"
            rx="32"
            strokeWidth={4}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isSelected ? 1 : 0 }}
            transition={HOME_TRANSITION}
            className="stroke-accent fill-none"
         />
      </svg>
   );
}
