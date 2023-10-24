import { AnimatePresence, motion } from "framer-motion";
import useResetPassword from "../../../hooks/useResetPassword";
import MainResetForm from "./MainResetForm";
import ResetVerificationForm from "./ResetVerificationForm";
import AuthAppLogo from "../../AuthAppLogo";
import SkipAuthButton from "../../SkipAuthButton";

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
               initial={{ height: 0 }}
               animate={{ height: "100%" }}
               exit={{ height: 0 }}
               transition={{ duration: 1 }}
               className="fixed z-20 bottom-0 h-screen w-full bg-primary-dark text-dark-1 overflow-hidden origin-bottom flex items-end"
            >
               <div className="h-screen w-full flex justify-center md:items-center relative pt-20 md:pt-0">
                  <AuthAppLogo white />
                  <SkipAuthButton white />
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
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
