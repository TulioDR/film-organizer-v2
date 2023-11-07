import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
};

export default function PaginationContainer({ children }: Props) {
   return (
      <div className="w-full overflow-hidden">
         <motion.div
            className="w-full"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
         >
            {children}
         </motion.div>
      </div>
   );
}
