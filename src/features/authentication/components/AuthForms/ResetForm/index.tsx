import { AnimatePresence, motion, Transition } from "framer-motion";
import useResetPassword from "../../../hooks/useResetPassword";
import MainResetForm from "./MainResetForm";
import ResetVerificationForm from "./ResetVerificationForm";
import { AUTH_TRANSITION } from "@/features/authentication/Constants/AUTH_TRANSITION";

interface Props {
   showReset: boolean;
   closeReset: () => void;
}

export default function ResetForm({ showReset, closeReset }: Props) {
   const { handleReset, handleResetVerification, successfulCreation } =
      useResetPassword();

   return (
      <AnimatePresence>
         {showReset && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={AUTH_TRANSITION}
               className="absolute z-20 inset-0 bg-black dark:bg-white text-white dark:text-black overflow-hidden origin-bottom flex items-end"
            >
               <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={AUTH_TRANSITION}
                  className="h-full w-full flex justify-center items-center relative"
               >
                  {!successfulCreation && (
                     <MainResetForm
                        onSubmit={handleReset}
                        closeReset={closeReset}
                     />
                  )}
                  {successfulCreation && (
                     <ResetVerificationForm
                        onSubmit={handleResetVerification}
                     />
                  )}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
