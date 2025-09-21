import Backdrop from "@/features/layout/background/components/Backdrop";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
   src: string | null;
};

export default function HomeImage({ src }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="fixed inset-0 h-screen w-full overflow-hidden"
      >
         <div className="w-full h-full translate-x-1/3 xl:translate-x-1/4 relative">
            <div className="absolute top-0 left-0 h-full w-1/2 -translate-x-4 xl:translate-x-0 bg-gradient-to-r from-[#24282F] to-transparent z-10" />
            <AnimatePresence>
               {src && (
                  <motion.div
                     key={src}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="absolute top-0 left-0 w-full h-full -translate-x-4 xl:translate-x-0"
                  >
                     <Backdrop
                        src={`https://image.tmdb.org/t/p/original${src}`}
                        backgroundKey={src}
                     />
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </motion.div>
   );
}
