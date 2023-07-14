import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onClick?: () => void;
   isSignUp?: true;
   isSelected: boolean;
};

export default function AuthButton({
   children,
   onClick,
   isSignUp,
   isSelected,
}: Props) {
   const controls = useAnimationControls();
   useEffect(() => {
      if (isSelected) {
         controls.start({
            width: 160,
            transition: { duration: 0.5 },
         });
      } else {
         controls.start({
            width: 384,
            transition: { duration: 0.5, delay: 1 },
         });
      }
   }, [isSelected]);

   return (
      <motion.button
         onClick={onClick}
         initial={{ width: 160 }}
         animate={controls}
         type="button"
         className={`text-sm font-semibold py-3 rounded-full ${
            isSignUp ? "bg-white text-black" : "bg-blue-600 text-white"
         }`}
      >
         {children}
      </motion.button>
   );
}
