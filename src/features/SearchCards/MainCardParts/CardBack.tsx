import { motion, AnimatePresence } from "framer-motion";

type Props = {
   isOpen: boolean;
   children: React.ReactNode;
};

export default function CardBack({ isOpen, children }: Props) {
   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="absolute top-0 left-0 h-full w-full flex flex-col"
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
