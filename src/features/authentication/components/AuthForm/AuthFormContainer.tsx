import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
   showForm: boolean;
   isLoginForm?: true;
};

export default function AuthFormContainer({
   children,
   showForm,
   isLoginForm,
}: Props) {
   return (
      <div className="w-1/2 h-full overflow-hidden flex-shrink-0">
         <motion.div
            className={`h-full w-full flex justify-center items-center duration-1000 ${
               isLoginForm
                  ? showForm
                     ? ""
                     : "md:translate-x-full"
                  : showForm
                  ? "md:-translate-x-full"
                  : ""
            }`}
         >
            {children}
         </motion.div>
      </div>
   );
}
