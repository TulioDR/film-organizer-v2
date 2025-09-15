import { motion } from "framer-motion";
import useAppSelector from "@/store/hooks/useAppSelector";

interface Props {
   children: React.ReactNode;
}

export default function PageSubtitle({ children }: Props) {
   const { isHidden } = useAppSelector((state) => state.layout);

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
