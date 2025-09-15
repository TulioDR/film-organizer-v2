import useAppSelector from "@/store/hooks/useAppSelector";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SavedMediaContainer({ children }: Props) {
   const { expandSidebar } = useAppSelector((state) => state.sidebar);
   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
         className={`gap-5 grid grid-cols-2 md:grid-cols-3 ${
            expandSidebar
               ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         }`}
      >
         {children}
      </motion.div>
   );
}
