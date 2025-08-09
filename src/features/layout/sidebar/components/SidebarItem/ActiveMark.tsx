import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Store from "@/common/models/Store";

type Props = {
   layoutId: string;
};

export default function ActiveMark({ layoutId }: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);

   return (
      <motion.div
         layoutId={layoutId}
         style={{ backgroundColor: themeColor, borderRadius: "5px" }}
         className="absolute top-0 left-0 aspect-square h-full pointer-events-none"
         transition={{ duration: 0.6, type: "spring" }}
      />
   );
}
