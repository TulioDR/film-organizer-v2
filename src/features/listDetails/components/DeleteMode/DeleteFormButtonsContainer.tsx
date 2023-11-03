import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function DeleteFormButtonsContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ height: 0 }}
         animate={{ height: 48 }}
         exit={{ height: 0 }}
         transition={{ duration: 0.3 }}
         className="overflow-hidden w-full"
      >
         <div className="w-full h-12 flex-shrink-0 flex items-center justify-center gap-5 ">
            {children}
         </div>
      </motion.div>
   );
}
