import React from "react";
import TitleSection from "./TitleSection";
import { AnimatePresence, motion } from "framer-motion";
import Store from "@/common/models/Store";
import { useSelector } from "react-redux";

type Props = {};

export default function PageTitle({}: Props) {
   const { title: titles } = useSelector((state: Store) => state.pageTitle);

   const { isHidden } = useSelector((state: Store) => state.layout);
   // useEffect(() => console.log(title), [title]);

   const getKey = (title: { text: string; link: string }, index: number) => {
      return index === 0 ? title.text : title.text + titles[index - 1]?.text;
   };

   return (
      <motion.div
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="fixed top-32 left-32 overflow-hidden h-8 flex gap-2 xl:gap-4 pointer-events-auto z-10"
      >
         {titles.map((title, index) => (
            <AnimatePresence key={index} mode="wait">
               {title && (
                  <TitleSection key={getKey(title, index)} title={title} />
               )}
            </AnimatePresence>
         ))}
      </motion.div>
   );
}
