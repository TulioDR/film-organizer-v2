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
         className={`text-black dark:text-white border-accent border-2 flex items-center justify-center flex-1 h-full rounded-md
            hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white
            active:bg-black active:text-white dark:active:text-black dark:active:bg-white
         `}
      >
         <span className="text-xs 2xl:text-sm font-light uppercase">
            Learn More
         </span>
      </motion.button>
   );
}
