import { motion } from "framer-motion";
import Image from "next/image";
import Poster from "../../Poster";

type Props = {
   trailers: any[];
};

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
};

const item = {
   initial: { opacity: 0, y: 100 },
   animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};

export default function Trailers({ trailers }: Props) {
   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="h-full w-full overflow-y-scroll grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 pt-3 pr-3"
      >
         {trailers.map((trailer) => (
            <motion.article
               variants={item}
               key={trailer.id}
               className="cursor-pointer flex flex-col"
            >
               <Poster
                  alt={trailer.name}
                  posterPath={trailer.key}
                  size="md"
                  backPoster
                  trailer
               />
               <div className="text-sm pt-1">{trailer.name}</div>
            </motion.article>
         ))}
      </motion.div>
   );
}
