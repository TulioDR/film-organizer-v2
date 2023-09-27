import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   isSelected: boolean;
};

export default function SideLinkContainer({
   children,
   onHoverStart,
   onHoverEnd,
   isSelected,
}: Props) {
   return (
      <motion.li
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         className={`cursor-pointer w-full relative flex list-none select-none ${
            isSelected
               ? "text-light-1 dark:text-dark-1"
               : "text-light-2 hover:text-light-1 dark:text-dark-2 dark:hover:text-dark-1"
         }`}
      >
         {children}
      </motion.li>
   );
}
