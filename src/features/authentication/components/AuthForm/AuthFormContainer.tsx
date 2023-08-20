import { motion } from "framer-motion";
type Props = {
   login?: true;
   register?: true;
   reset?: true;
   children: React.ReactNode;
};

export default function AuthFormContainer({
   login,
   register,
   reset,
   children,
}: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%", transition: { duration: 0.5 } }}
         exit={{ opacity: 0, transition: { duration: 0, delay: 0.5 } }}
         className={`h-full absolute top-0 left-0 overflow-hidden
            ${login ? "bg-primary-light text-light-1" : ""}
            ${register ? "bg-secondary-dark text-dark-1" : ""}
            ${reset ? "bg-primary-dark text-dark-1" : ""}
         `}
      >
         <div className="pl-36 h-full w-screen flex items-center justify-center text-xl">
            {children}
         </div>
      </motion.div>
   );
}
