import React from "react";
import Poster from "../Poster";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   backPath: string;
   isForward: boolean;
};

export default function Banner({ backPath, isForward }: Props) {
   return (
      <div className="h-64 w-full">
         <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute left-0 bottom-0 w-full h-4 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10" />
            <div className="absolute left-0 bottom-0 h-full w-4 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10" />
            <AnimatePresence>
               <motion.div
                  key={backPath}
                  initial={{ x: isForward ? "100%" : "-100%" }}
                  animate={{
                     x: 0,
                     transition: { duration: 1, ease: "easeInOut" },
                  }}
                  exit={{
                     opacity: 0,
                     transition: { duration: 0, delay: 1 },
                  }}
                  className="absolute inset-0 overflow-hidden bg-black"
               >
                  <motion.div
                     initial={{ x: isForward ? "-100%" : "100%" }}
                     animate={{
                        x: 0,
                        transition: { duration: 1, ease: "easeInOut" },
                     }}
                     className="w-full h-full "
                  >
                     <Poster
                        posterPath={backPath}
                        alt="hello"
                        size="original"
                     />
                  </motion.div>
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}
