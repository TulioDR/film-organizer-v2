import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = {};

export default function ActiveMark({}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <motion.div
         layoutId="activeMark"
         // style={{ originX: "0px" }}
         className="absolute top-0 left-0 w-full h-full p-2 z-10 pointer-events-none"
         transition={{ duration: 0.6, type: "spring" }}
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="rounded-md w-full h-full"
         />
      </motion.div>
   );
}
