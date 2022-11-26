import { GetServerSideProps } from "next";
import Head from "next/head";

import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import movieGenres from "../../data/genres/movieGenres";
import tvGenres from "../../data/genres/tvGenres";
import GenreModel from "../../models/genresModel";
import { AnimatePresence, motion } from "framer-motion";
import Poster from "../../components/Poster";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType } = context.query;
   const isMovie = mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;
   return {
      props: { isMovie, genresData: genres, mediaType },
   };
};

type Props = {
   isMovie: boolean;
   genresData: GenreModel[];
   mediaType: "tv" | "movie";
};

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
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

export default function Genres({ isMovie, mediaType }: Props) {
   const [genres, setGenres] = useState<any[]>([]);

   const [type, setType] = useState<"tv" | "movie">(mediaType);
   useEffect(() => {
      console.log("run this");
      const genresArray = type === "movie" ? movieGenres : tvGenres;
      setGenres(genresArray);
   }, [type]);

   return (
      <div>
         <Head>
            <title>{`${isMovie ? "Movie" : "TV"} Genres`}</title>
            <meta name="description" content="Which is your favorite genre?" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <PageTitle>{isMovie ? "Movie" : "TV"} Genres</PageTitle>
         <AnimatePresence
            mode="wait"
            onExitComplete={() => {
               const container = document.getElementById("scroll-container")!;
               container.scrollTo({ top: 0 });
               setType(mediaType);
            }}
         >
            {genres.length > 0 && (
               <motion.div
                  variants={container}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={mediaType}
                  className="grid grid-cols-2 xl:grid-cols-3 overflow-hidden"
               >
                  {genres.map((genre) => (
                     <motion.div
                        key={genre.id}
                        variants={item}
                        className={`aspect-video relative group overflow-hidden cursor-pointer`}
                     >
                        <div className="relative w-full h-full brightness-50 group-hover:brightness-100 group-hover:scale-110 ease-in-out duration-300">
                           <Poster
                              alt={genre.name}
                              posterPath={genre.image}
                              size="md"
                              genres
                              backPoster
                           />
                        </div>
                        <div className="absolute z-10 top-0 left-0 w-full h-full grid place-content-center">
                           <span className="text-3xl font-bold group-hover:opacity-0 duration-300">
                              {genre.name}
                           </span>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
