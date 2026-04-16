type Props = {
   posterPaths: (string | null)[];
};

import Poster from "@/common/components/Poster";
import { motion } from "framer-motion";

export default function PlaylistCardPoster({ posterPaths }: Props) {
   const LENGTH = 3;
   return (
      <motion.div layout className="h-full w-full relative">
         {Array.from({ length: LENGTH }).map((_, index) => {
            const reverseIndex = LENGTH - 1 - index;
            return (
               <div
                  key={index}
                  className={`absolute h-full aspect-[2/3] shadow-md 
                  ${posterPaths[reverseIndex] ? "" : ""}
                  ${index === 0 ? "bg-zinc-600 dark:bg-slate-200 left-0" : ""}
                  ${index === 1 ? "bg-zinc-700 dark:bg-slate-300 left-1/2 -translate-x-1/2" : ""}
                  ${index === 2 ? "bg-zinc-800 dark:bg-slate-400 right-0" : ""}
               `}
               >
                  {posterPaths[reverseIndex] && (
                     <Poster
                        alt={posterPaths[reverseIndex]}
                        posterPath={posterPaths[reverseIndex]}
                        size="md"
                     />
                  )}
               </div>
            );
         })}
      </motion.div>
   );
}
