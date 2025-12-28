import GenreName from "./GenreName";
import ImageLink from "@/common/components/ImageLink";
import Poster from "@/common/components/Poster";
import { MediaGenre } from "@/features/pages/media-type/models/Filters";
import { motion } from "framer-motion";

type Props = {
   genre: MediaGenre;
   mediaType: "tv" | "movie";
};

export default function GenreCard({ genre, mediaType }: Props) {
   const DURATION = 0.3;

   const item1 = {
      initial: { x: "-101%" },
      animate: { x: "0%" },
      exit: { x: "-101%" },
   };
   const item2 = {
      initial: { x: "101%" },
      animate: { x: "0%" },
      exit: { x: "101%" },
   };

   return (
      <div className="overflow-hidden">
         <motion.div
            variants={item1}
            transition={{ duration: DURATION }}
            className="overflow-hidden"
         >
            <motion.div
               variants={item2}
               transition={{ duration: DURATION }}
               className="overflow-hidden"
            >
               <ImageLink
                  key={genre.id}
                  link={`/${mediaType}/genres/${genre.id}`}
                  background={
                     <Poster alt={genre.name} posterPath={genre.image} />
                  }
                  front={<GenreName name={genre.name} />}
                  className="aspect-video rounded"
               />
            </motion.div>
         </motion.div>
      </div>
   );
}
