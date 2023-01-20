import { motion } from "framer-motion";
import { homeContainer } from "../../animations/homeAnimations";
type Props = {
   children: React.ReactNode;
};

export default function HomeContainer({ children }: Props) {
   return (
      <motion.div
         variants={homeContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         className="space-y-6"
      >
         {children}
      </motion.div>
   );
}
