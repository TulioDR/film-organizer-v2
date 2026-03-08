import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
   title: string;
};

export default function HomeTitle({ title }: Props) {
   return (
      <div className="flex-1 h-full flex items-center">
         <div className="overflow-hidden">
            <AnimatePresence mode="wait">
               <motion.div
                  key={title}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="uppercase text-5xl 2xl:text-7xl font-extralight"
               >
                  {title}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}
