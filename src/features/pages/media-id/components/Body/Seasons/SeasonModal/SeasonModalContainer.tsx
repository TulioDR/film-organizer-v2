import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import { MODAL_DURATION } from "@/features/modals/modal-parts/constants/MODAL_DURATION";
import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
   close: () => void;
};

export default function SeasonModalContainer({ children, close }: Props) {
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: MODAL_DURATION }}
            onClick={close}
            className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-50"
         />
         <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: MODAL_DURATION }}
            className="fixed h-[100svh] w-full px-4 lg:px-32 py-16 xl:py-20 top-0 left-0 z-50"
         >
            <div
               style={{ borderRadius: STANDARD_RADIUS }}
               className="w-full h-full bg-white dark:bg-black relative"
            >
               {children}
            </div>
         </motion.div>
      </>
   );
}
