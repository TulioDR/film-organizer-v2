import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};
const container = {
   initial: {},
   animate: {
      transition: {
         staggerChildren: 0.15,
      },
   },
   exit: {},
};

export default function SeasonInnerContainer({ children }: Props) {
   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="w-full h-full relative"
      >
         {children}
      </motion.div>
   );
}
