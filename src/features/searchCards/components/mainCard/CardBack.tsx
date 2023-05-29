import { motion, AnimatePresence } from "framer-motion";

type Props = {
   isOpen: boolean;
   children: React.ReactNode;
   onExitComplete: () => void;
};

export default function CardBack({ isOpen, children, onExitComplete }: Props) {
   return (
      <AnimatePresence onExitComplete={onExitComplete}>
         {isOpen && (
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="absolute top-0 left-0 h-full w-full flex flex-col"
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
