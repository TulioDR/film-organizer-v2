import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   logo: string | StaticImageData;
   isHovered: boolean;
   transition: any;
};

export default function FrontIcon({ logo, isHovered, transition }: Props) {
   return (
      <motion.div
         initial={false}
         animate={{ opacity: isHovered ? 1 : 0 }}
         transition={{ duration: 0.3 }}
         className="absolute inset-0 bg-black/60 flex items-center justify-center"
      >
         <motion.div
            initial={false}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={transition}
            className="rounded-full aspect-square w-24 bg-white flex items-center justify-center"
         >
            <div className="relative w-2/3 aspect-square">
               <Image src={logo} alt="info icon" fill sizes="100%" />
            </div>
         </motion.div>
      </motion.div>
   );
}
