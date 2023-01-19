import { useFormikContext } from "formik";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SubmitButton({ children }: Props) {
   const { submitForm, resetForm } = useFormikContext();
   const handleClick = () => {
      submitForm();
      resetForm();
   };
   return (
      <motion.button
         whileTap={{ scale: 0.95 }}
         type="button"
         onTap={handleClick}
         className="h-10 bg-slate-800 rounded-full text-dark-text-hard shadow-xl uppercase font-semibold tracking-wide"
      >
         {children}
      </motion.button>
   );
}
