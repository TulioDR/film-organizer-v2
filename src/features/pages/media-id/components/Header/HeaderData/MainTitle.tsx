import { itemVariant } from "@/common/animations/revealVariants";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MainTitle({ children }: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            variants={itemVariant}
            className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-black uppercase leading-none text-center md:text-start"
         >
            {children}
         </motion.div>
      </div>
   );
}
