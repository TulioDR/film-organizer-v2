import React from "react";
import MenuItemsContainer from "../MenuItemsContainer";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function SubMenuContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ x: "100%" }}
         animate={{ x: "0%" }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.4 }}
         className="absolute inset-0"
      >
         <MenuItemsContainer>{children}</MenuItemsContainer>
      </motion.div>
   );
}
