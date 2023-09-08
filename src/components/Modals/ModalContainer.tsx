import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

type Props = {
   children: React.ReactNode;
   closeModal: () => void;
};

export default function ModalContainer({ children, closeModal }: Props) {
   const [showInnerModal, setShowInnerModal] = useState<boolean>(false);

   const modalControls = useAnimationControls();
   useEffect(() => {
      const execute = async () => {
         await modalControls.start({ width: "100%", opacity: 1 });
         await modalControls.start({ height: 300 });
         setShowInnerModal(true);
      };
      execute();
   }, []);
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 grid place-content-center z-50"
         ></motion.div>
         <motion.div
            initial={{ height: 10, width: 100, opacity: 0 }}
            animate={modalControls}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full mx-auto flex justify-center bg-primary-light dark:bg-primary-dark z-50"
         >
            {showInnerModal && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-10 h-full flex flex-col items-center justify-center"
               >
                  {children}
               </motion.div>
            )}
         </motion.div>
      </>
   );
}
