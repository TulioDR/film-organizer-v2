import { GetServerSideProps } from "next";
import SearchCards from "@/features/searchCards/components/SearchCards";

import { useEffect } from "react";
import useBackground from "@/hooks/useBackground";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreModel from "@/models/genresModel";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType, genreID } = context.query;
   const isMovie = mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;
   const genre = genres.find((g) => g.id === +genreID!);
   return {
      props: { mediaType, genreID, genre },
   };
};

interface Props {
   mediaType: "tv" | "movie";
   genre: GenreModel;
}

export default function GenrePage({ mediaType, genre }: Props) {
   const { changeBackground } = useBackground();
   useEffect(() => {
      changeBackground(genre);
   }, []);

   return (
      <SearchCards
         url={`/genres/${mediaType}/${genre.id}`}
         title={genre.name}
         mediaType={mediaType}
         noRemoveBackground
      />
   );
}
