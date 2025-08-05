import React from "react";
import { motion } from "framer-motion";
import PaginationContent from "./PaginationContent";

type Props = {
   onClick?: () => void;
   page?: string | number;
   left?: true;
   right?: true;
   isActive?: boolean;
   disabled?: boolean;
   grayText?: boolean;
};

export default function PaginationButton({
   onClick,
   page,
   left,
   right,
   isActive = false,
   disabled = false,
   grayText = false,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-full aspect-square select-none relative hover:bg-white text-white hover:text-black 
            ${disabled ? "pointer-events-none" : ""}
            ${grayText ? "text-border" : ""}
         `}
      >
         {isActive && (
            <motion.div
               layoutId="active-pagination"
               // layout="position"
               className="absolute top-0 left-0 w-full h-full p-2"
               transition={{ duration: 0.6, type: "spring" }}
            >
               <div className="rounded-md w-full h-full bg-blue-500" />
            </motion.div>
         )}
         <div className="relative h-full w-full flex items-center justify-center">
            <PaginationContent left={left} right={right} page={page} />
         </div>
      </button>
   );
}
