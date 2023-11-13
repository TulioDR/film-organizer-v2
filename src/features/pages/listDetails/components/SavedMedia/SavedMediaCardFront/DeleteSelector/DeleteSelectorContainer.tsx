import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function DeleteSelectorContainer({ onClick, children }: Props) {
   return (
      <motion.div
         onClick={onClick}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         onMouseDown={(e) => e.preventDefault()}
         className="absolute top-0 left-0 w-full h-full select-none rounded-lg sm:rounded-3xl cursor-pointer overflow-hidden border-4 border-red-700"
      >
         {children}
      </motion.div>
   );
}
