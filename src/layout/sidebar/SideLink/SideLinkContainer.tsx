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
               ? "text-black dark:text-white"
               : "text-gray-800 hover:text-black dark:text-text-2 dark:hover:text-white"
         }`}
      >
         {children}
      </motion.li>
   );
}
