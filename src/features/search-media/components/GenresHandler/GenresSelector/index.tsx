import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreModel from "@/features/pages/genres/models/GenreModel";
import ReactLenis from "lenis/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import GenreCard from "@/features/pages/genres/components/GenreCard";

type Props = {};

export default function GenresSelector({}: Props) {
   const router = useRouter();
   const [genres, setGenres] = React.useState<GenreModel[]>([]);

   useEffect(() => {
      const MT = router.query.media_type;
      const currentGenres = MT === "movie" ? movieGenres : tvGenres;
      setGenres(currentGenres);
   }, []);
   return (
      <div className="w-full h-full overflow-hidden">
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-full h-full overflow-hidden"
         >
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.3 }}
               className="w-full h-full"
            >
               <ReactLenis className="w-full h-full overflow-y-auto bg-gray-200 rounded-lg border-8 p-2 border-gray-200">
                  <div className="w-full h-full pointer-events-auto grid grid-cols-3 2xl:grid-cols-4">
                     {genres.map((genre, index) => (
                        <GenreCard
                           key={index}
                           genre={genre}
                           mediaType={
                              (router?.query?.media_type as "tv" | "movie") ||
                              "movie"
                           }
                        />
                     ))}
                  </div>
               </ReactLenis>
            </motion.div>
         </motion.div>
      </div>
   );
}
