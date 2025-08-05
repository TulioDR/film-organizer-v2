import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import GenreCard from "@/features/pages/genres/components/GenreCard";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenresContainer from "@/features/pages/genres/components/GenresContainer";
import PageHead from "@/common/components/PageHead";

export default function Genres() {
   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";
   const isMovie = mediaType === "movie";
   const genresArray = isMovie ? movieGenres : tvGenres;

   return (
      <motion.div
         exit={{ opacity: 0, transition: { duration: 0.4 } }}
         className="px-4 lg:px-24 xl:px-32 pt-32 pb-8"
      >
         <PageHead title="Genres" />
         <AnimatePresence mode="wait">
            <GenresContainer key={mediaType}>
               {genresArray.map((genre) => (
                  <GenreCard
                     key={genre.id}
                     genre={genre}
                     mediaType={mediaType}
                  />
               ))}
            </GenresContainer>
         </AnimatePresence>
      </motion.div>
   );
}
