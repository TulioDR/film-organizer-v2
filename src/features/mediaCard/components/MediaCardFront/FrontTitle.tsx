import React from "react";
import { motion } from "framer-motion";

type Props = {
   title: string;
};

export default function FrontTitle({ title }: Props) {
   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0 } }}
         className="hidden sm:block absolute h-full w-full top-0 left-0 group"
      >
         <div className="relative w-full h-full">
            <div className="w-full h-full bg-black/70 absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500" />
            <div className="absolute top-0 left-0 grid place-content-center w-full h-full p-5 translate-x-full group-hover:translate-x-0 duration-500">
               <span className="text-base sm:text-lg uppercase font-title text-dark-1 text-center tracking-wider ">
                  {title}
               </span>
            </div>
         </div>
      </motion.div>
   );
}
