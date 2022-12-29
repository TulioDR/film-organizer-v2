import { AnimatePresence, motion } from "framer-motion";

type Props = {
   isOpen: boolean;
   children: React.ReactNode;
   close: () => void;
};

export default function ModalContainer({ isOpen, children, close }: Props) {
   return (
      <AnimatePresence>
         {isOpen && (
            <>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={close}
                  className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-50 grid place-content-center z-50"
               ></motion.div>
               <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-lg p-10 bg-light-bg dark:bg-dark-bg z-50">
                  {children}
               </div>
            </>
         )}
      </AnimatePresence>
   );
}
