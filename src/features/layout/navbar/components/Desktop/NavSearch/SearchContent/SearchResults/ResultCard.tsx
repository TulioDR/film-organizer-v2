import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";
import Link from "next/link";

type Props = {
   href: string;
   onMouseEnter: () => void;
   isSelected: boolean;
   media: any;
};

export default function ResultCard({
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
            className={`h-32 p-2 cursor-pointer flex gap-2 rounded overflow-hidden ${
               isSelected
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "text-black dark:text-white"
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
            <div className="flex flex-col flex-1 h-full justify-center">
               <div className="text-text-1 text-xs sm:text-sm tracking-wider font-medium">
                  {media.title || media.name}
               </div>
               <div className="text-text-2 text-xs tracking-wide">
                  {getDate(media.release_date || media.first_air_date)}
               </div>
            </div>
         </motion.li>
      </Link>
   );
}
