import { staggerContainer } from "@/animations/StaggerCards";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function ListsCardsContainer({ children }: Props) {
   return (
      <motion.div
         variants={staggerContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:px-20"
      >
         {children}
      </motion.div>
   );
}
