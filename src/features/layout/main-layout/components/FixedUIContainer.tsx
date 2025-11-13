import React from "react";
import { motion } from "framer-motion";
import useAppSelector from "@/store/hooks/useAppSelector";

type Props = {
   children: React.ReactNode;
};

export default function FixedUIContainer({ children }: Props) {
   const { isHidden } = useAppSelector((state) => state.layout);
   return (
      <motion.div
         layout
         layoutRoot
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="z-20 pointer-events-none fixed inset-0 p-4 xl:py-4 px-32"
      >
         <div id="main-layout" className="w-full h-full relative">
            {children}
         </div>
      </motion.div>
   );
}
