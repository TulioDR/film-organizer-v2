import { motion } from "framer-motion";

type Props = {
   register?: true;
   children: React.ReactNode;
   isSelected: boolean;
};

export default function TranslateContainer({
   register,
   children,
   isSelected,
}: Props) {
   return (
      <div
         className={`h-full duration-500 ${
            register ? (isSelected ? "flex-[1]" : "flex-[4]") : "flex-[2]"
         }`}
      >
         <motion.div
            initial={{ x: register ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: register ? "100%" : "-100%" }}
            transition={{ duration: 0.5 }}
            className={`w-full h-full ${
               register ? "bg-secondary text-white" : "bg-gray-200 text-black"
            }`}
         >
            <div className={`h-full flex items-center justify-center `}>
               {children}
            </div>
         </motion.div>
      </div>
   );
}
