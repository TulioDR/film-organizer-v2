import { GetServerSideProps } from "next";

import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import SearchMedia from "@/features/search-media/components/SearchMedia";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { media_type, genre_id } = context.query;
   const isMovie = media_type === "movie";
   const genres = isMovie ? movieGenres : tvGenres;
   const genre = genres.find((g) => g.id === +genre_id!);
   return {
      props: { genre },
   };
};

export default function GenrePage() {
   return <SearchMedia />;
}
