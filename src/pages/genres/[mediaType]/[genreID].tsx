import { GetServerSideProps } from "next";
import SearchCards from "../../../components/SearchCards";
import movieGenres from "../../../data/genres/movieGenres";
import tvGenres from "../../../data/genres/tvGenres";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType, genreID } = context.query;
   const isMovie = mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;
   const title = genres.find((g) => g.id === +genreID!)?.name;
   return {
      props: { mediaType, genreID, title },
   };
};

interface Props {
   mediaType: "tv" | "movie";
   genreID: number;
   title: string;
}

export default function GenrePage({ mediaType, genreID, title }: Props) {
   return (
      <SearchCards
         url={`/api/genres/${mediaType}/${genreID}`}
         title={title}
         mediaType={mediaType}
      />
   );
}
