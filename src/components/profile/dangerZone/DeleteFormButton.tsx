import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
   red?: boolean;
   onClick: () => void;
   enableDelete?: boolean;
};

export default function DeleteFormButton({
   children,
   red,
   onClick,
   enableDelete,
}: Props) {
   return (
      <motion.button
         whileTap={{ scale: 0.95 }}
         onClick={onClick}
         className={`px-3 h-9 rounded-lg ${
            red
               ? `${
                    enableDelete
                       ? "bg-red-700"
                       : "bg-dark-bg-primary pointer-events-none"
                 }`
               : "bg-gray-500"
         }`}
      >
         {children}
      </motion.button>
   );
}
