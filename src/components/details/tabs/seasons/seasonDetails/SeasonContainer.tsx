import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
   onAnimationComplete: () => void;
};

export default function SeasonContainer({
   children,
   onAnimationComplete,
}: Props) {
   return (
      <motion.div
         initial={{ x: "100%" }}
         animate={{ x: 0 }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         onAnimationComplete={onAnimationComplete}
         className="absolute top-0 right-0 h-full w-full bg-light-bg-primary dark:bg-dark-bg-primary z-10 overflow-y-auto overflow-x-hidden xl:pr-5 main-scrollbar"
      >
         {children}
      </motion.div>
   );
}
