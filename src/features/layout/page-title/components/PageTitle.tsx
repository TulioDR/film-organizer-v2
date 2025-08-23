import React, { useEffect } from "react";
import TitleSection from "./TitleSection";
import { AnimatePresence, motion } from "framer-motion";
import Store from "@/common/models/Store";
import { useSelector } from "react-redux";

type Props = {};

export default function PageTitle({}: Props) {
   const { title } = useSelector((state: Store) => state.pageTitle);

   const { isHidden } = useSelector((state: Store) => state.layout);
   useEffect(() => console.log(title), [title]);

   return (
      <motion.div
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="fixed top-32 left-32 overflow-hidden h-8 flex gap-2 xl:gap-4 pointer-events-auto z-10"
      >
         {title.map((text, index) => (
            <AnimatePresence key={index} mode="wait">
               {text && (
                  <TitleSection
                     key={index === 0 ? text : text + title[index - 1]}
                     text={text}
                  />
               )}
            </AnimatePresence>
         ))}
      </motion.div>
   );
}
