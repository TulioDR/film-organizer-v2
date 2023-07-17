import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function AuthFormContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0, width: 44 }}
         animate={{
            opacity: 1,
            width: "100%",
            transition: {
               opacity: {
                  duration: 0.5,
               },
               width: {
                  duration: 0.5,
                  delay: 0.5,
               },
            },
         }}
         exit={{ opacity: 0, width: 44, transition: { duration: 0.5 } }}
         className="overflow-hidden mx-auto flex flex-col items-center"
      >
         {children}
      </motion.div>
   );
}
