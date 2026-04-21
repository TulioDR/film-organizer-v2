import { AnimatePresence, motion, Variants } from "framer-motion";
import Poster from "@/common/components/Poster";
import { HOME_DURATION } from "../../constants/ANIMATIONS";

type Props = {
   frontPath: string;
   direction: number;
};

export default function HomePoster({ frontPath, direction }: Props) {
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
      <AnimatePresence initial={false} custom={direction}>
         <motion.div
            key={frontPath}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full absolute inset-0"
         >
            <Poster alt="Featured Poster" posterPath={frontPath} size="md" />
         </motion.div>
      </AnimatePresence>
   );
}
