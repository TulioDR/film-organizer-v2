import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Store from "@/common/models/Store";

type Props = {
   children: React.ReactNode;
   similar?: boolean;
   className?: string;
};

export default function Container({ children, similar, className }: Props) {
   const { isHidden } = useSelector((state: Store) => state.layout);
   const [hideUi, setHideUi] = React.useState(false);

   useEffect(() => {
      if (isHidden && !similar) {
         setHideUi(true);
      } else {
         setHideUi(false);
      }
   }, [isHidden, similar]);

   return (
      <motion.div
         animate={{
            opacity: hideUi ? 0 : 1,
            // backgroundColor: isHidden ? "transparent" : "rgb(229 231 235)",
         }}
         transition={{ duration: 0.2 }}
         className={`w-full flex flex-col gap-4 p-4 xl:p-8 rounded-2xl duration-200 ${
            isHidden ? "" : "bg-gray-200"
         } ${className}`}
      >
         {children}
      </motion.div>
   );
}
