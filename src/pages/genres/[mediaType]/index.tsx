import { GetServerSideProps } from "next";
import Head from "next/head";
import PageTitle from "../../../components/PageTitle";
import movieGenres from "../../../data/genres/movieGenres";
import tvGenres from "../../../data/genres/tvGenres";
import GenreModel from "../../../models/genresModel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MovieLayout from "../../../components/Genres/MovieLayout";
import TvLayout from "../../../components/Genres/TvLayout";

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
   useEffect(() => {
      const container = document.body;
      container.scrollTo({ top: 0 });
   }, []);

   const [genresData, setGenresData] = useState<any[]>(movieGenres);

   useEffect(() => {
      if (mediaType === "movie") setGenresData(movieGenres);
      else setGenresData(tvGenres);
   }, [mediaType]);

   return (
      <div className="flex flex-col px-10">
         <Head>
            <title>{title}</title>
            <meta name="description" content="Which is your favorite genre?" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="flex justify-between">
            <PageTitle>{title}</PageTitle>
         </div>
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col gap-5 pb-10"
         >
            {mediaType === "movie" ? (
               <MovieLayout mediaType={mediaType} genres={genresData} />
            ) : (
               <TvLayout mediaType={mediaType} genres={genresData} />
            )}
         </motion.div>
      </div>
   );
}
