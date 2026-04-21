import Poster from "../Poster";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { HOME_DURATION } from "@/features/pages/home/constants/ANIMATIONS";

type Props = {
   backPath: string;
   direction?: number;
};

export default function Banner({ backPath, direction = 1 }: Props) {
   const slideVariants: Variants = {
      enter: (direction: number) => ({
         x: direction > 0 ? "100%" : "-100%",
      }),
      center: {
         x: 0,
         transition: { duration: HOME_DURATION, ease: "easeInOut" },
      },
      exit: (direction: number) => ({
         x: direction > 0 ? "-100%" : "100%",
         transition: { duration: HOME_DURATION, ease: "easeInOut" },
      }),
   };

   return (
      <motion.div
         initial={{ y: "-100%" }}
         animate={{ y: "0%" }}
         exit={{ y: "-100%" }}
         transition={{ duration: 0.4 }}
         className="h-64 w-full overflow-hidden bg-white dark:bg-black rounded-bl-lg border-l border-b border-border-light dark:border-border-dark"
      >
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center relative overflow-hidden"
         >
            <AnimatePresence initial={false} custom={direction}>
               <motion.div
                  key={backPath}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
               >
                  <Poster
                     posterPath={backPath}
                     alt={backPath}
                     size="original"
                  />
               </motion.div>
            </AnimatePresence>
         </motion.div>
      </motion.div>
   );
}
