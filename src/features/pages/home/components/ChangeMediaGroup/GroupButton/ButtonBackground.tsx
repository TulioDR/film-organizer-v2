import React from "react";
import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";

type Props = {
   src: string;
   isHovered: boolean;
};

export default function ButtonBackground({ src, isHovered }: Props) {
   return (
      <motion.div
         animate={{ scale: isHovered ? 1.1 : 1 }}
         transition={{ duration: 0.4, ease: "easeOut" }}
         className="w-full h-full flex items-center justify-center"
      >
         <Poster alt={src} posterPath={src} />
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10"></div>
      </motion.div>
   );
}
