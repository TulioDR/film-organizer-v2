import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   overflow: boolean;
   onUpdate: (e: any) => void;
};

export default function SidePanelContainer({
   children,
   overflow,
   onUpdate,
}: Props) {
   return (
      <div
         className={`w-full h-full
               ${overflow ? "" : "overflow-hidden"}
            `}
      >
         <motion.div
            initial={{ x: "100%" }}
            onUpdate={onUpdate}
            className={`w-full h-full first 
               ${overflow ? "" : "overflow-hidden"}
            `}
         >
            <motion.div
               initial={{ x: "-100%" }}
               className={`w-full h-full second pointer-events-auto
                  ${overflow ? "" : "overflow-hidden"}
               `}
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
