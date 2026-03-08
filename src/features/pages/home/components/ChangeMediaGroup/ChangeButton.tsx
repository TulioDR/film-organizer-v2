import Poster from "@/common/components/Poster";
import React from "react";
import { motion } from "framer-motion";

type Props = {
   src: string;
   text: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function ChangeButton({
   src,
   text,
   isSelected,
   onClick,
}: Props) {
   return (
      <div className="relative h-full w-48">
         <button
            onClick={onClick}
            className="rounded-full relative border border-border-light dark:border-border-dark w-full h-full overflow-hidden"
         >
            <div className="w-full h-full flex items-center justify-center brightness-50">
               <Poster alt={src} posterPath={src} />
            </div>
            <div className="absolute inset-0 flex items-center pl-4 text-sm uppercase font-bold text-white">
               {text}
            </div>
         </button>
         <svg
            width="100%"
            height="100%"
            className="block overflow-visible absolute inset-0 pointer-events-none"
         >
            <motion.rect
               width="100%"
               height="100%"
               rx="32"
               strokeWidth={4}
               initial={{ pathLength: 0 }}
               animate={{ pathLength: isSelected ? 1 : 0 }}
               transition={{ duration: 1, ease: "easeInOut" }}
               className="stroke-accent fill-none"
            />
         </svg>
      </div>
   );
}
