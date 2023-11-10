import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

type Props = {
   children: React.ReactNode;
   closeModal: () => void;
};

export default function ModalContainer({ children, closeModal }: Props) {
   const modalControls = useAnimationControls();
   const innerModalControls = useAnimationControls();
   useEffect(() => {
      const execute = async () => {
         await modalControls.start({ width: "100%", opacity: 1 });
         await modalControls.start({ height: "auto" });
         innerModalControls.start({ opacity: 1 });
      };
      execute();
   }, [modalControls, innerModalControls]);
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 grid place-content-center z-50"
            onMouseDown={(e) => e.preventDefault()}
         />
         <motion.div
            initial={{ height: 10, width: 100, opacity: 0 }}
            animate={modalControls}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full mx-auto flex justify-center bg-primary-light dark:bg-primary-dark z-50"
            onMouseDown={(e) => e.preventDefault()}
         >
            <motion.div
               initial={{ opacity: 0 }}
               animate={innerModalControls}
               transition={{ duration: 0.2 }}
               className="p-10 h-full flex flex-col items-center justify-center"
            >
               {children}
            </motion.div>
         </motion.div>
      </>
   );
}
