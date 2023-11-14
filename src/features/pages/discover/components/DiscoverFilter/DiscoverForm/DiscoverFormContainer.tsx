import React from "react";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function DiscoverFormContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ width: 40, height: 0, padding: 0 }}
         animate={{
            width: "100%",
            height: "auto",
            padding: 0,
            transition: { duration: 0.5 },
         }}
         exit={{
            width: 40,
            height: 0,
            padding: 0,
            transition: { duration: 0.5, delay: 0.2 },
         }}
         className="absolute z-10 top-full bg-secondary-light dark:bg-secondary-dark right-0 rounded-lg rounded-tr-none"
      >
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="overflow-x-hidden overflow-y-auto w-full"
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
