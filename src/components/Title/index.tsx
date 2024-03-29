import React from "react";
import TitleContainer from "./TitleContainer";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = {
   title: string;
   children?: React.ReactNode;
};

export default function Title({ title, children }: Props) {
   const { backgroundKey } = useSelector(
      (state: StoreModel) => state.background
   );
   const item = {
      initial: { x: "-100%", opacity: 0 },
      animate: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
      exit: {
         x: "-100%",
         opacity: 0,
         transition: { duration: 0.4, ease: "easeInOut" },
      },
   };
   return (
      <TitleContainer>
         <div className="overflow-hidden">
            <motion.div
               variants={item}
               initial="initial"
               animate="animate"
               exit="exit"
               className={`text-center sm:text-left text-4xl sm:text-6xl 2xl:text-7xl font-title tracking-wide uppercase ${
                  backgroundKey
                     ? "text-dark-1"
                     : "text-light-1 dark:text-dark-1"
               }`}
            >
               {title}
            </motion.div>
         </div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
         >
            {children}
         </motion.div>
      </TitleContainer>
   );
}
