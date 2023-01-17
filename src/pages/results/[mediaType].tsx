import { GetServerSideProps } from "next";
import SearchCards from "../../features/searchCards/components/SearchCards";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType, search_query } = context.query;
   return {
      props: { mediaType, searchQuery: search_query },
   };
};

type Props = {
   mediaType: "tv" | "movie";
   searchQuery: string;
};

export default function Results({ mediaType, searchQuery }: Props) {
   const type = mediaType === "movie" ? "Movies" : "TV Shows";
   return (
      <SearchCards
         url={`/api/results/${mediaType}/${searchQuery}`}
         title={`Founded ${type}`}
         mediaType={mediaType}
      />
   );
}
