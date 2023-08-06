import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   item?: true;
   isSelected: boolean;
};

export default function SideActiveMark({ item, isSelected }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <div
         className={`flex-shrink-0 absolute right-full top-0 h-full ${
            item ? "w-3" : "w-10"
         }`}
      >
         <div className="h-full ml-auto">
            {isSelected && (
               <motion.div
                  style={{ backgroundColor: themeColor }}
                  className="w-1 h-full"
                  layoutId={item ? "underline-item" : "underline"}
               />
            )}
         </div>
      </div>
   );
}
