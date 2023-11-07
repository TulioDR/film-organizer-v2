import { motion } from "framer-motion";
import MovieLayout from "./MovieLayout";
import TvLayout from "./TvLayout";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";

type Props = {
   mediaType: "movie" | "tv";
};

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {},
};

export default function GenreLayout({ mediaType }: Props) {
   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="w-full flex flex-col gap-5"
      >
         {mediaType === "movie" ? (
            <MovieLayout genres={movieGenres} />
         ) : (
            <TvLayout genres={tvGenres} />
         )}
      </motion.div>
   );
}
