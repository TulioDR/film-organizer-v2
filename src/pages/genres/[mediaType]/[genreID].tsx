import { GetServerSideProps } from "next";
import movieGenres from "../../../data/genres/movieGenres";
import tvGenres from "../../../data/genres/tvGenres";
import SearchCards from "../../../features/SearchCards/SearchCards";
import useSearchCards from "../../../features/SearchCards/useSearchCards";

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

export default function genrePage({ mediaType, genreID, title }: Props) {
   const { media } = useSearchCards(`/api/genres/${mediaType}/${genreID}/1`);

   return (
      <SearchCards title={title} mediaType={mediaType} mediaArray={media} />
   );
}
