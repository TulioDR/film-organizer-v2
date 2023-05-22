import { AnimatePresence, motion } from "framer-motion";

type Props = {
   showEditButtons: boolean;
   children: React.ReactNode;
};

export default function EditButtonsContainer({
   showEditButtons,
   children,
}: Props) {
   return (
      <AnimatePresence>
         {showEditButtons && (
            <motion.div
               initial={{ y: "-100%" }}
               animate={{ y: 0 }}
               exit={{ y: "-100%" }}
               transition={{ duration: 0.2 }}
               className="absolute top-0 left-0 w-full h-full bg-dark-bg-secondary"
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
