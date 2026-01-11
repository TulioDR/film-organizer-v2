import React from "react";
import { motion } from "framer-motion";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";

type Props = {
   children: React.ReactNode;
};

export default function DesktopPresetsContainer({ children }: Props) {
   const { toggleTemplates } = useMediaFilterContext();

   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleTemplates}
            className="absolute top-0 left-0 w-full h-full z-20"
         />
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-full z-20 p-8 pointer-events-none"
         >
            {children}
         </motion.div>
      </>
   );
}
