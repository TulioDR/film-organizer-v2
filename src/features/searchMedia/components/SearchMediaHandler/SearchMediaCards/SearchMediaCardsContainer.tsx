import { motion } from "framer-motion";
import { cardsContainer } from "../../../animations/cardsAnimation";

type Props = {
   children: React.ReactNode;
};

export default function SearchMediaCardsContainer({ children }: Props) {
   return (
      <motion.div
         variants={cardsContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         className={`gap-8 grid grid-cols-2 md:grid-cols-3 ${
            true
               ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         }`}
      >
         {children}
      </motion.div>
   );
}
