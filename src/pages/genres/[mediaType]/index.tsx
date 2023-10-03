import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";

import GenreModel from "@/models/genresModel";

import MovieLayout from "@/components/Pages/Genres/MovieLayout";
import TvLayout from "@/components/Pages/Genres/TvLayout";
import Title from "@/components/Title";
import useScrollToTop from "@/hooks/useScrollToTop";

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
   exit: {},
};

export default function Genres({ isMovie, mediaType }: Props) {
   const title = `${isMovie ? "Movie" : "TV"} Genres`;
   useScrollToTop();

   const [genresData, setGenresData] = useState<any[]>(movieGenres);

   useEffect(() => {
      if (mediaType === "movie") setGenresData(movieGenres);
      else setGenresData(tvGenres);
   }, [mediaType]);

   return (
      <div className="">
         <Head>
            <title>{title}</title>
            <meta name="description" content="Which is your favorite genre?" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Title title={title} />
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col gap-5"
         >
            {mediaType === "movie" ? (
               <MovieLayout genres={genresData} />
            ) : (
               <TvLayout genres={genresData} />
            )}
         </motion.div>
      </div>
   );
}
