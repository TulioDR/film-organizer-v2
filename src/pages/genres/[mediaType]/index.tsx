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
import BackgroundImage2 from "../../../components/BackgroundImage2";
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
      const container = document.getElementById("scroll-container")!;
      container.scrollTo({ top: 0 });
   }, []);

   const [genresData, setGenresData] = useState<any[]>(movieGenres);
   const [currentGenre, setCurrentGenre] = useState<any>(null);

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
         <BackgroundImage2
            currentImg={currentGenre?.image}
            imageKey={currentGenre?.id}
         />
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
               <MovieLayout
                  mediaType={mediaType}
                  genres={genresData}
                  setCurrentGenre={setCurrentGenre}
               />
            ) : (
               <TvLayout
                  mediaType={mediaType}
                  genres={genresData}
                  setCurrentGenre={setCurrentGenre}
               />
            )}
         </motion.div>
      </div>
   );
}
