import Store from "@/common/models/Store";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = {
   isFilled: boolean;
   icon: string;
   isSelectedMainSelected: boolean;
};

export default function SideItemIcon({
   isFilled,
   icon,
   isSelectedMainSelected,
}: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);

   return (
      <div
         className={`h-full flex items-center justify-center aspect-square relative ${
            isFilled ? "text-white" : ""
         }`}
      >
         {isSelectedMainSelected && (
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.3 }}
               className="absolute top-0 left-0 w-full h-full"
            >
               {isFilled && (
                  <motion.div
                     layoutId="activeMarkDropdown"
                     transition={{ duration: 0.6, type: "spring" }}
                     style={{ backgroundColor: themeColor }}
                     className="w-full h-full rounded"
                  />
               )}
            </motion.div>
         )}
         <span
            style={isFilled ? { fontVariationSettings: `"FILL" 1` } : {}}
            className="material-symbols-outlined !text-center !flex-shrink-0 !text-xl !relative"
         >
            {icon}
         </span>
      </div>
   );
}
