import React from "react";
import { motion } from "framer-motion";

type Props = {
   text: string;
};

export default function TitleSection({ text }: Props) {
   const item = {
      initial: { y: "100%" },
      animate: {
         y: 0,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
      exit: {
         y: "-100%",
         transition: { duration: 0.4, ease: "easeInOut" },
      },
   };

   return (
      <motion.a
         variants={item}
         initial="initial"
         animate="animate"
         exit="exit"
         className="h-full flex items-center cursor-pointer hover:border-b border-white uppercase text-3xl font-title tracking-wide"
      >
         {`>\xa0${text}`}
      </motion.a>
   );
}
