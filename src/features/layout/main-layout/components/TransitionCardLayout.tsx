import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function TransitionCardLayout({}: Props) {
   return (
      <motion.div
         layout
         layoutRoot
         className="fixed top-0 left-0 p-32 h-[100svh] z-50 pointer-events-none"
      >
         <div
            id="TRANSITION_CARD_CONTAINER"
            className="aspect-[2/3] h-full flex items-center justify-center"
         ></div>
      </motion.div>
   );
}
