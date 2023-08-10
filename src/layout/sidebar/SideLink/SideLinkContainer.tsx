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
               ? "text-white"
               : "text-text-2 hover:text-white duration-100"
         }`}
      >
         {children}
      </motion.li>
   );
}
