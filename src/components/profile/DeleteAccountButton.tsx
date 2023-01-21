import { motion } from "framer-motion";

export default function DeleteAccountButton() {
   return (
      <motion.button
         whileTap={{ scale: 0.95 }}
         className="rounded-lg py-2 px-4 max-w-max bg-red-700 text-dark-text-hard"
      >
         Delete Account
      </motion.button>
   );
}
