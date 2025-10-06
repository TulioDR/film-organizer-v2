import React from "react";

import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";
import Link from "next/link";

type Props = {
   media: any;
   index: number;
   currentIndex: number | null;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
   mediaType: "movie" | "tv";
};

export default function SBResultsItem({
   media,
   index,
   currentIndex,
   setCurrentIndex,
   mediaType,
}: Props) {
   const selected = index !== null && index === currentIndex;

   const getDate = (date?: string): string => {
      if (date) return date.substring(0, 4);
      return "N/A";
   };
   return (
      <Link href={`/${mediaType}/${media.id}`}>
         <motion.li
            onMouseDown={(e: any) => e.preventDefault()}
            onMouseEnter={() => setCurrentIndex(index)}
            onMouseLeave={() => setCurrentIndex(null)}
            className={`h-32 cursor-pointer flex gap-2 items-center px-4 text-black ${
               selected ? "bg-white shadow-md" : ""
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
               <div className="text-text-1 text-sm">
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
