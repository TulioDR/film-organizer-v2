import React from "react";
import { motion } from "framer-motion";
import Reel from "@/features/layout/loader/components/Reel";

type Props = {
   isLoading: boolean;
};

export default function BackIcon({ isLoading }: Props) {
   return (
      <motion.div
         initial={false}
         animate={{
            opacity: isLoading ? 1 : 0.2,
            x: isLoading ? 0 : "40%",
            y: isLoading ? 0 : "-40%",
         }}
         transition={{ duration: 0.2 }}
         className="w-full h-full absolute top-0 left-0 flex items-center justify-center pointer-events-none"
      >
         <div className="w-1/2 aspect-square">
            <Reel spin={isLoading} />
         </div>
      </motion.div>
   );
}
