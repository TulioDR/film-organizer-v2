import StoreModel from "@/models/StoreModel";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function FixedContainer({ children }: Props) {
   const { isHidden } = useSelector((state: StoreModel) => state.layout);
   return (
      <motion.div
         animate={{ opacity: isHidden ? 0 : 1, transition: { duration: 0.2 } }}
         id="main-layout"
         className="pointer-events-none fixed top-0 left-0 h-[100svh] w-screen z-10"
      >
         {children}
      </motion.div>
   );
}
