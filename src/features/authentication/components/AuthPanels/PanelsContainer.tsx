import { motion } from "framer-motion";
import { AUTH_TRANSITION } from "../../Constants/AUTH_TRANSITION";

type Props = {
   children: React.ReactNode;
   showPanel: boolean;
};

export default function PanelsContainer({ children, showPanel }: Props) {
   return (
      <motion.div
         initial={false}
         animate={{ x: showPanel ? "100%" : "0%" }}
         transition={AUTH_TRANSITION}
         className={`z-10 h-full w-1/2 absolute top-0 left-0 overflow-hidden 
            bg-white border dark:bg-black border-border-light dark:border-border-dark
         `}
      >
         <motion.div
            initial={false}
            animate={{ x: showPanel ? "-50%" : "0%" }}
            transition={AUTH_TRANSITION}
            className={`min-w-[200%] h-full flex`}
         >
            {children}
         </motion.div>
      </motion.div>
   );
}
