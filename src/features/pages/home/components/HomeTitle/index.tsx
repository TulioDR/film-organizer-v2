import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useHomeContext from "../../context/HomeContext";
import { HOME_DURATION, HOME_EASE } from "../../constants/ANIMATIONS";

type Props = {};

export default function HomeTitle({}: Props) {
   const { media } = useHomeContext();

   const title = media.title || media.name;

   return (
      <div className="flex-1 w-full flex items-center">
         <div className="overflow-hidden">
            <AnimatePresence mode="wait">
               <motion.div
                  key={title}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{
                     duration: HOME_DURATION / 2,
                     ease: HOME_EASE,
                  }}
                  className="uppercase text-5xl 2xl:text-6xl font-extralight"
               >
                  {title}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}
