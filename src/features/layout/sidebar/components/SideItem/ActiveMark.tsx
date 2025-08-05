import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Store from "@/common/models/Store";

type Props = {};

export default function ActiveMark({}: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);
   return (
      <motion.div
         layoutId="activeMark"
         className="absolute top-0 left-0 w-full h-full p-2 z-10 pointer-events-none"
         transition={{ duration: 0.6, type: "spring" }}
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="rounded-[5px] w-full h-full"
         />
      </motion.div>
   );
}
