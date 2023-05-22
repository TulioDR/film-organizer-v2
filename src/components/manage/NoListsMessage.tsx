import { motion } from "framer-motion";

export default function NoListsMessage() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.6 }}
         className="text-dark-text-normal"
      >
         This is so empty...
      </motion.div>
   );
}
