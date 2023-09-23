import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function CardBack({ children }: Props) {
   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         className="absolute top-0 left-0 h-full w-full flex flex-col"
      >
         {children}
      </motion.div>
   );
}
