import { motion } from "framer-motion";
import {
   staggerContainer,
   staggerItem,
} from "../../../animations/StaggerCards";
import Poster from "../../Poster";

type Props = {
   trailers: any[];
};

export default function Trailers({ trailers }: Props) {
   const goToTrailer = (key: string) => {
      window.open(`https://www.youtube.com/watch?v=${key}`, "_blank");
   };

   return (
      <motion.div
         variants={staggerContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         className="w-full pt-3 pr-3"
      >
         {trailers.length ? (
            <div className="w-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
               {trailers.map((trailer) => (
                  <motion.article
                     key={trailer.id}
                     variants={staggerItem}
                     onClick={() => goToTrailer(trailer.key)}
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
            </div>
         ) : (
            <motion.div variants={staggerItem}>
               No trailers available
            </motion.div>
         )}
      </motion.div>
   );
}
