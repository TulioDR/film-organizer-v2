type Props = {};

import { motion } from "framer-motion";

export default function PlaylistCardPoster({}: Props) {
   return (
      <motion.div layout className="h-full w-full relative">
         <div className="absolute h-full aspect-[2/3] left-0 bg-zinc-600 dark:bg-slate-200 shadow-md" />
         <div className="absolute h-full aspect-[2/3] left-1/2 -translate-x-1/2 bg-zinc-700 dark:bg-slate-300 shadow-md" />
         <div className="absolute h-full aspect-[2/3] right-0 bg-zinc-800 dark:bg-slate-400 shadow-md" />
      </motion.div>
   );
}
