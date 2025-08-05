import { itemVariant } from "@/common/animations/revealVariants";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MainTitle({ children }: Props) {
   return (
      <div className="overflow-hidden">
         <motion.h1
            variants={itemVariant}
            className="text-4xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-title uppercase leading-tight text-center md:text-start"
         >
            {children}
         </motion.h1>
      </div>
   );
}
