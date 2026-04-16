type Props = {
   posterPaths: (string | null)[];
};

import Poster from "@/common/components/Poster";
import { motion } from "framer-motion";

export default function PlaylistCardPoster({ posterPaths }: Props) {
   return (
      <motion.div layout className="h-full w-full relative">
         {Array.from({ length: 3 }).map((_, index) => (
            <div
               key={index}
               className={`absolute h-full aspect-[2/3]  shadow-md 
                  ${posterPaths[index] ? "border border-border-light dark:border-border-dark" : ""}
                  ${index === 2 ? "left-0 bg-zinc-600 dark:bg-slate-200" : ""}
                  ${index === 1 ? "left-1/2 -translate-x-1/2 z-10 bg-zinc-700 dark:bg-slate-300" : ""}
                  ${index === 0 ? "right-0 z-20 bg-zinc-800 dark:bg-slate-400" : ""}
               `}
            >
               {posterPaths[index] && (
                  <Poster
                     alt={posterPaths[index]}
                     posterPath={posterPaths[index]}
                     size="md"
                  />
               )}
            </div>
         ))}
      </motion.div>
   );
}
