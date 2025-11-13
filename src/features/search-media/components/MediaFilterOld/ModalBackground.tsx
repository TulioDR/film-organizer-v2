import React from "react";
import { motion } from "framer-motion";

type Props = {
   DURATION: number;
   toggle: () => void;
};

export default function ModalBackground({ DURATION, toggle }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: DURATION }}
         onClick={toggle}
         className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-40"
      />
   );
}
