import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
type Props = {
   children: React.ReactNode;
};

export default function DropdownItems({ children }: Props) {
   const { expandSidebar } = useSelector((state: StoreModel) => state.sidebar);
   return (
      <motion.ul
         initial={{ height: 0 }}
         animate={{ height: "auto" }}
         exit={{ height: 0 }}
         transition={{ duration: 0.3 }}
         className="overflow-hidden"
      >
         <div className={`flex-shrink-0 duration-200 pl-4 text-sm`}>
            {children}
         </div>
      </motion.ul>
   );
}
