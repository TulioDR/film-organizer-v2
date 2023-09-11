import { staggerContainer } from "@/animations/StaggerCards";
import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
};

export default function SavedMediaContainer({ children }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   return (
      <motion.div
         variants={staggerContainer}
         initial="initial"
         animate="animate"
         exit="exit"
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
