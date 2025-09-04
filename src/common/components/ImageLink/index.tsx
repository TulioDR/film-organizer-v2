import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { smoothScaleTransition } from "@/common/animations/smoothTransitions";

type Props = {
   link: string;
   background: React.ReactNode;
   front: React.ReactNode;
   className?: string;
   fullFront?: true;
};

export default function ImageLink({
   link,
   background,
   front,
   className = "",
   fullFront,
}: Props) {
   const [isHovered, setIsHovered] = useState(false);
   const handleHoverStart = async () => setIsHovered(true);
   const handleHoverEnd = () => setIsHovered(false);

   return (
      <Link
         href={link}
         className={`w-full relative block overflow-hidden ${className}`}
      >
         <motion.div
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            whileTap={{ scale: 1 }}
            transition={smoothScaleTransition}
            className="relative w-full h-full"
         >
            {background}
         </motion.div>
         <motion.div
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={smoothScaleTransition}
            className={`absolute w-full flex bottom-0 left-0  p-4 pointer-events-none ${
               fullFront
                  ? "h-full justify-center items-center bg-black/90"
                  : "h-1/2 justify-start items-end bg-gradient-to-t from-black/90 to-transparent"
            }`}
         >
            {front}
         </motion.div>
      </Link>
   );
}
