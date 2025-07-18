import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
}

export default function Subtitle({ children }: Props) {
   const { isHidden } = useSelector((state: StoreModel) => state.layout);

   return (
      <motion.h4
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="text-2xl xl:text-3xl 2xl:text-4xl tracking-wide font-title text-black"
      >
         {children}
      </motion.h4>
   );
}
