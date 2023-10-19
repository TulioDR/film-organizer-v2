import { GetServerSideProps } from "next";
import SearchCards from "@/features/searchCards/components/SearchCards";

import { useEffect } from "react";
import useBackground from "@/hooks/useBackground";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreModel from "@/models/genresModel";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { media_type, genre_id } = context.query;
   const isMovie = media_type === "movie";
   const genres = isMovie ? movieGenres : tvGenres;
   const genre = genres.find((g) => g.id === +genre_id!);
   return {
      props: { genre },
   };
};

interface Props {
   genre: GenreModel;
}

export default function GenrePage({ genre }: Props) {
   const { changeBackground } = useBackground();
   useEffect(() => {
      changeBackground(genre);
   }, [changeBackground, genre]);

   return (
      <SearchCards
         apiUrl={`/genres/${genre.id}`}
         title={genre.name}
         noRemoveBackground
      />
   );
}
