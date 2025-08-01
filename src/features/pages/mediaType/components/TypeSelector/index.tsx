import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
   title: string;
   background: React.ReactNode;
   link: string;
};

export default function TypeSelector({ title, background, link }: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const handleHoverStart = () => {
      setIsHovered(true);
   };

   const handleHoverEnd = () => {
      setIsHovered(false);
   };

   const transition = { type: "spring", stiffness: 150, damping: 20, mass: 1 };

   return (
      <motion.div
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
         className="w-full h-full overflow-hidden"
      >
         <Link href={link} className="w-full h-full relative block">
            <motion.div
               animate={{ scale: isHovered ? 1.1 : 1, transition }}
               className="relative w-full h-full"
            >
               {background}
            </motion.div>
            <motion.div
               animate={{ opacity: isHovered ? 0 : 1, transition }}
               className="absolute w-full h-2/3 bottom-0 left-0 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-start p-4"
            >
               <span className="text-3xl font-extralight">{title}</span>
            </motion.div>
         </Link>
      </motion.div>
   );
}
