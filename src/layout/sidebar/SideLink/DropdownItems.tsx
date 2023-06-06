import { motion } from "framer-motion";
type Props = {
   children: React.ReactNode;
};

export default function DropdownItems({ children }: Props) {
   return (
      <motion.ul
         initial={{ height: 0 }}
         animate={{ height: "auto" }}
         exit={{ height: 0 }}
         transition={{ duration: 0.3 }}
         className="overflow-hidden"
      >
         <div className="space-y-4 pt-4 flex-shrink-0">{children}</div>
      </motion.ul>
   );
}
