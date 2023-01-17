import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function ExitDetails({ children }: Props) {
   return (
      <motion.div
         exit={
            true
               ? {
                    opacity: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                 }
               : {}
         }
         className="w-full details-height"
      >
         {children}
      </motion.div>
   );
}
