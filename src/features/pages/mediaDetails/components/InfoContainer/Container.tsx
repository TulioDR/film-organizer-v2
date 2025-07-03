import StoreModel from "@/models/StoreModel";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   columnLength?: number;
   similar?: boolean;
};

export default function Container({
   children,
   columnLength = 1,
   similar,
}: Props) {
   const { isHidden } = useSelector((state: StoreModel) => state.layout);
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
            backgroundColor: isHidden ? "transparent" : "",
         }}
         transition={{ duration: 0.2 }}
         style={{ gridColumn: `span ${columnLength} / span ${columnLength}` }}
         className="w-full flex flex-col gap-4 p-8 rounded-2xl bg-gray-200"
      >
         {children}
      </motion.div>
   );
}
