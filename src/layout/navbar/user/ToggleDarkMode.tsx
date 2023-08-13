import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30,
};
export default function ToggleDarkMode() {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );

   return (
      <div className="h-full py-2">
         <div
            style={{ backgroundColor: isDarkMode ? themeColor : "#d1d5db" }}
            className={`switch h-full w-9 p-[3px] flex rounded-full ${
               isDarkMode ? "justify-end" : "justify-start bg-gray-300"
            }`}
         >
            <motion.div
               className="rounded-full h-full aspect-square bg-white"
               layout
               transition={spring}
            />
         </div>
      </div>
   );
}
