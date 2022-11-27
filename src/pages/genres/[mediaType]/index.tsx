import { GetServerSideProps } from "next";
import Head from "next/head";
import PageTitle from "../../../components/PageTitle";
import movieGenres from "../../../data/genres/movieGenres";
import tvGenres from "../../../data/genres/tvGenres";
import GenreModel from "../../../models/genresModel";
import { motion } from "framer-motion";
import GenreCard from "../../../layout/cards/GenreCard";

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

export default function Genres({ isMovie, mediaType, genresData }: Props) {
   return (
      <div>
         <Head>
            <title>{`${isMovie ? "Movie" : "TV"} Genres`}</title>
            <meta name="description" content="Which is your favorite genre?" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <PageTitle>{isMovie ? "Movie" : "TV"} Genres</PageTitle>
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-2 xl:grid-cols-3 overflow-hidden"
         >
            {genresData.map((genre) => (
               <GenreCard key={genre.id} genre={genre} mediaType={mediaType} />
            ))}
         </motion.div>
      </div>
   );
}
