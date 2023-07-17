import { useEffect } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useFormikContext } from "formik";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
   register: boolean;
   isSelected: boolean;
};

export default function AuthButton({
   children,
   onClick,
   register,
   isSelected,
}: Props) {
   const { submitForm, resetForm } = useFormikContext();
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

   const handleClick = () => {
      onClick();
      resetForm();
   };

   return (
      <AnimatePresence>
         <motion.button
            onClick={isSelected ? handleClick : submitForm}
            initial={{ width: isSelected ? 160 : 384 }}
            animate={controls}
            type={isSelected ? "submit" : "button"}
            className={`text-sm font-semibold py-3 ${
               register ? "bg-white text-black" : "bg-primary text-white"
            }`}
         >
            {children}
         </motion.button>
      </AnimatePresence>
   );
}
