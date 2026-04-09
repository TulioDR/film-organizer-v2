import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   id: string;
};

export default function LearnMore({ onClick, id }: Props) {
   return (
      <motion.button
         layoutId={`back-loading-${id}`}
         onClick={onClick}
         className="text-white dark:text-black bg-accent flex items-center justify-center flex-1 h-full rounded-md"
      >
         <span className="text-xs 2xl:text-sm font-medium uppercase">
            Learn More
         </span>
      </motion.button>
   );
}
