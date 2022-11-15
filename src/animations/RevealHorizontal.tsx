import { motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   fromRight?: boolean;
}

export default function RevealHorizontal({ children, fromRight }: Props) {
   return (
      <motion.div
         initial={{ x: fromRight ? "100%" : "-100%", opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         exit={{ x: fromRight ? "100%" : "-100%", opacity: 0 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
      >
         {children}
      </motion.div>
   );
}
