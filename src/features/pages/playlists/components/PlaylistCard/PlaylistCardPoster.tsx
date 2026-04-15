type Props = {};

import { motion } from "framer-motion";

export default function PlaylistCardPoster({}: Props) {
   return (
      <div className="w-full flex items-center justify-center p-4 aspect-square">
         <motion.div layout className="h-full w-full relative">
            <div className="absolute h-full aspect-[2/3] left-0 bg-red-400 shadow-md" />
            <div className="absolute h-full aspect-[2/3] left-1/2 -translate-x-1/2 bg-red-500 shadow-md" />
            <div className="absolute h-full aspect-[2/3] right-0 bg-red-600 shadow-md" />
         </motion.div>
      </div>
   );
}
