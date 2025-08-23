import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Loader({}: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         className="absolute top-full left-0 bg-blue-500 loader-animation h-1"
      />
   );
}
