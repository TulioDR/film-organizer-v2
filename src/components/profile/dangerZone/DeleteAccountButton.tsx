import { motion } from "framer-motion";
import { deleteFormAnimation } from "./deleteFormAnimation";

interface Props {
   onClick: () => void;
}
export default function DeleteAccountButton({ onClick }: Props) {
   return (
      <motion.div
         variants={deleteFormAnimation}
         initial="initial"
         animate="animate"
         exit="exit"
         className="overflow-hidden"
      >
         <motion.button
            onTap={onClick}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg py-2 px-4 max-w-max bg-red-700 text-dark-text-hard"
         >
            Delete Account
         </motion.button>
      </motion.div>
   );
}
