import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MediaCardBackContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ y: "100%" }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.5 }}
         className="absolute top-0 left-0 w-full h-full flex flex-col bg-secondary-light dark:bg-secondary-dark"
      >
         {children}
      </motion.div>
   );
}
