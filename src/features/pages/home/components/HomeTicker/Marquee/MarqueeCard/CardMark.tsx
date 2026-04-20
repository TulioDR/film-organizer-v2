import { motion } from "framer-motion";
import { HOME_DURATION } from "../../../../constants/ANIMATIONS";

type Props = {
   onAnimationComplete: (e: any) => void;
};

export default function CardMark({ onAnimationComplete }: Props) {
   return (
      <motion.div
         initial={{ opacity: 1 }}
         exit={{ opacity: 0, transition: { duration: HOME_DURATION / 2 } }}
         className="absolute bottom-1 right-1 h-4 aspect-square rounded-full border border-border-light dark:border-border-dark -rotate-90"
      >
         <svg className="w-full h-full overflow-visible ">
            <motion.circle
               r="50%"
               cx="50%"
               cy="50%"
               onAnimationComplete={onAnimationComplete}
               className="stroke-accent fill-transparent"
               strokeWidth={4}
               initial={{ pathLength: 0 }}
               animate={{
                  pathLength: 1,
                  transition: { duration: HOME_DURATION },
               }}
               exit={{
                  pathLength: 0,
                  transition: { duration: HOME_DURATION / 2 },
               }}
            />
         </svg>
      </motion.div>
   );
}
