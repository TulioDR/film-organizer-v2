import StoreModel from "@/models/StoreModel";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
   isFocused: boolean;
};
export default function InputUnderline({ isFocused }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <AnimatePresence>
         {isFocused && (
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               exit={{ width: 0 }}
               transition={{
                  duration: 0.4,
                  ease: "easeInOut",
               }}
               style={{ backgroundColor: themeColor }}
               className="absolute bottom-0 left-0 w-full h-1"
            />
         )}
      </AnimatePresence>
   );
}
