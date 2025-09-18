import React from "react";
import { motion } from "framer-motion";
import useAppSelector from "@/store/hooks/useAppSelector";

type Props = {
   layoutId: string;
};

export default function ActiveMark({ layoutId }: Props) {
   const { themeColor } = useAppSelector((state) => state.theme);

   return (
      <motion.div
         layoutId={layoutId}
         style={{ backgroundColor: themeColor, borderRadius: "5px" }}
         className="w-full h-full pointer-events-none"
         transition={{ duration: 0.6, type: "spring" }}
      />
   );
}
