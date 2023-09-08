import { GetServerSideProps } from "next";
import SearchCards from "../../features/searchCards/components/SearchCards";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType, sort_by, with_genres, with_original_language, year } =
      context.query;
   const voteAverage = context.query["vote_average.gte"];
   const filters = `&with_original_language=${with_original_language}&with_genres=${with_genres}&year=${year}&vote_average.gte=${voteAverage}&sort_by=${sort_by}`;
   return {
      props: { mediaType, filters },
   };
};

type Props = {
   mediaType: "tv" | "movie";
   filters: string;
};

export default function DiscoveredMedia({ mediaType, filters }: Props) {
   const type = mediaType === "movie" ? "Movies" : "TV Shows";
   return (
      <SearchCards
         url={`/discover/${mediaType}/${filters}`}
         title={`Founded ${type}`}
         mediaType={mediaType}
      />
   );
}
