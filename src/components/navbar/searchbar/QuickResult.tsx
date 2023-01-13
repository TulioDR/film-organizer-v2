import React from "react";
import Poster from "../../Poster";
import { motion } from "framer-motion";

type Props = {
   media: any;
   index: number;
   currentIndex: number | null;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
   getDetails: (index: number) => void;
};

export default function QuickResult({
   media,
   index,
   currentIndex,
   setCurrentIndex,
   getDetails,
}: Props) {
   const selected = index !== null && index === currentIndex;

   const getDate = (date?: string): string => {
      if (date) return date.substring(0, 4);
      return "N/A";
   };
   return (
      <motion.li
         onClick={() => getDetails(index)}
         onMouseDown={(e) => e.preventDefault()}
         onMouseEnter={() => setCurrentIndex(index)}
         onMouseLeave={() => setCurrentIndex(null)}
         className={`h-20 cursor-pointer flex py-2 px-5 ${
            selected ? "bg-light-bg-primary dark:bg-dark-bg-primary" : ""
         }`}
      >
         <Poster
            alt={media.title || media.name}
            size="sm"
            posterPath={media.poster_path}
         />
         <div className="pl-2">
            <div className="text-light-text-normal dark:text-dark-text-normal text-sm">
               {media.title || media.name}
            </div>
            <div className="text-light-text-soft dark:text-dark-text-soft text-xs">
               {getDate(media.release_date || media.first_air_date)}
            </div>
         </div>
      </motion.li>
   );
}
