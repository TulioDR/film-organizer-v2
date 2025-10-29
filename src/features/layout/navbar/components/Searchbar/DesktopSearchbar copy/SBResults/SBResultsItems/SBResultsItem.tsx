import React from "react";

import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";
import Link from "next/link";

type Props = {
   href: string;
   onMouseEnter: () => void;
   isSelected: boolean;
   media: any;
};

export default function SBResultsItem({
   href,
   onMouseEnter,
   isSelected,
   media,
}: Props) {
   const getDate = (date?: string): string => {
      if (date) return date.substring(0, 4);
      return "N/A";
   };
   return (
      <Link href={href}>
         <motion.li
            id={`sb-item-${media.id}`}
            onMouseDown={(e: any) => e.preventDefault()}
            onMouseEnter={onMouseEnter}
            className={`h-32 cursor-pointer flex gap-2 items-center rounded overflow-hidden pr-4  ${
               isSelected ? "bg-white text-black shadow-md" : "text-black"
            }`}
         >
            <div className="aspect-[2/3] h-full">
               <Poster
                  alt={media.title || media.name}
                  size="sm"
                  posterPath={media.poster_path}
                  front
               />
            </div>
            <div className="">
               <div className="text-text-1 text-xs">
                  {media.title || media.name}
               </div>
               <div className="text-text-2 text-xs">
                  {getDate(media.release_date || media.first_air_date)}
               </div>
            </div>
         </motion.li>
      </Link>
   );
}
