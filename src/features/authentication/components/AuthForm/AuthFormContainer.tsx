import { AnimatePresence, motion } from "framer-motion";
import { AUTH_TRANSITION } from "../../Constants/AUTH_TRANSITION";
type Props = {
   children: React.ReactNode;
   showForm: boolean;
   reverse?: true;
};

export default function AuthFormContainer({
   children,
   showForm,
   reverse,
}: Props) {
   return (
      <div
         className={`w-full xl:w-1/2 h-full overflow-hidden absolute top-0 
            ${reverse ? "left-0" : "right-0"}
            ${showForm ? "" : "pointer-events-none"} 
         `}
      >
         <AnimatePresence>
            {showForm && (
               <motion.div
                  initial={{ x: reverse ? "100%" : "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: reverse ? "100%" : "-100%" }}
                  transition={AUTH_TRANSITION}
                  className="w-full h-full flex flex-col justify-center items-center"
               >
                  {children}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
