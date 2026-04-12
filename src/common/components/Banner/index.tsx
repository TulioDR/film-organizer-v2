import Poster from "../Poster";
import { AnimatePresence, motion } from "framer-motion";
import { HOME_DURATION } from "@/features/pages/home/constants/ANIMATIONS";

type Props = {
   backPath: string;
   isForward?: boolean;
};

export default function Banner({ backPath, isForward }: Props) {
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
            <AnimatePresence initial={false}>
               <motion.div
                  key={backPath}
                  initial={{ x: isForward ? "100%" : "-100%" }}
                  animate={{
                     x: 0,
                     transition: { duration: HOME_DURATION, ease: "easeInOut" },
                  }}
                  exit={{
                     opacity: 0,
                     transition: { duration: 0, delay: HOME_DURATION },
                  }}
                  className="absolute inset-0 overflow-hidden"
               >
                  <motion.div
                     initial={{ x: isForward ? "-100%" : "100%" }}
                     animate={{
                        x: 0,
                        transition: {
                           duration: HOME_DURATION,
                           ease: "easeInOut",
                        },
                     }}
                     className="w-full h-full "
                  >
                     <Poster
                        posterPath={backPath}
                        alt="hello"
                        size="original"
                     />
                  </motion.div>
               </motion.div>
            </AnimatePresence>
         </motion.div>
      </motion.div>
   );
}
