import React from "react";
import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
};

export default function LearnMoreButton({ onClick }: Props) {
   return (
      <motion.button
         onClick={onClick}
         className="h-12 bg-blue-500 text-white rounded-md px-4 flex items-center text-sm w-max uppercase font-medium"
      >
         Learn More
      </motion.button>
   );
}
