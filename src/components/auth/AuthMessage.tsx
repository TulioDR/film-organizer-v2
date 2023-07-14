import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function AuthMessage({ children }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { duration: 0.5 } }}
         exit={{ opacity: 0, transition: { duration: 0.5 } }}
         className="text-center w-80 mx-auto"
      >
         {children}
      </motion.div>
   );
}
