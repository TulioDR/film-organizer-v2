import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   tagPosition: any;
};

export default function SideTooltipContainer({ children, tagPosition }: Props) {
   return (
      <motion.div
         initial={{
            top: tagPosition.top,
            left: tagPosition.right,
            scale: 0.9,
            opacity: 0,
         }}
         animate={{
            scale: 1,
            opacity: 1,
         }}
         exit={{
            scale: 0.9,
            opacity: 0,
         }}
         transition={{ duration: 0.1 }}
         className="origin-left fixed z-10 px-10 w-max bg-secondary-light text-black dark:bg-secondary-dark dark:text-white shadow-xl rounded-lg"
      >
         {children}
      </motion.div>
   );
}
