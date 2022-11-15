import { motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   fromTop?: boolean;
}

export default function RevealVertical({ children, fromTop }: Props) {
   return (
      <motion.div
         initial={{ y: fromTop ? "-50%" : "50%", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: fromTop ? "-50%" : "50%", opacity: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
      >
         {children}
      </motion.div>
   );
}
