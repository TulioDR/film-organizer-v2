import React from "react";
import { motion } from "framer-motion";
import MenuItemsContainer from "../MenuItemsContainer";

type Props = {
   children: React.ReactNode;
   slideLeft: boolean;
};

export default function MainMenuContainer({ children, slideLeft }: Props) {
   return (
      <motion.div
         animate={{
            x: slideLeft ? "-100%" : "0%",
            transition: { duration: 0.4 },
         }}
         className="w-full h-full"
      >
         <MenuItemsContainer>{children}</MenuItemsContainer>
      </motion.div>
   );
}
