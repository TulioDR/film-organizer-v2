import { motion } from "framer-motion";
type Props = {};

export default function InputFocusUnderline({}: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         exit={{ width: 0 }}
         className="h-1 bg-accent absolute bottom-0 left-0"
      />
   );
}
