import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SideDdContainer({ children }: Props) {
   return (
      <motion.ul
         initial={{ height: 0 }}
         animate={{ height: "auto" }}
         exit={{ height: 0 }}
         transition={{ duration: 0.3 }}
         className="overflow-hidden"
      >
         <div className="pl-5 py-5 mt-2 space-y-2 rounded-xl shadow-xl bg-secondary-light dark:bg-secondary-dark">
            {children}
         </div>
      </motion.ul>
   );
}
