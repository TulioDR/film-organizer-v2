import React from "react";
import TitleContainer from "./TitleContainer";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = {
   title: string;
};

export default function Title({ title }: Props) {
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
      <div className="overflow-hidden mb-8">
         <motion.div
            variants={item}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`text-4xl font-title tracking-wide uppercase text-white`}
         >
            {title}
         </motion.div>
      </div>
   );
}
