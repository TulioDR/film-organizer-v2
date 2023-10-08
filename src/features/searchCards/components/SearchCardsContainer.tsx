import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
};

export default function SearchCardsContainer({ children }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   const cardsContainer = {
      initial: {},
      animate: { transition: { staggerChildren: 0.2 } },
      exit: {
         opacity: 0,
         transition: { duration: 0.4 },
      },
   };
   useRemoveBackgroundImage();
   return (
      <motion.div
         variants={cardsContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         className={`gap-5 mb-10 grid grid-cols-2 md:grid-cols-3 ${
            expandSidebar
               ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         }`}
      >
         {children}
      </motion.div>
   );
}
