import { GetServerSideProps } from "next";
import SearchCards from "../../features/SearchCards/SearchCards";
import useSearchCards from "../../features/SearchCards/useSearchCards";

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
   const { media } = useSearchCards(
      `/api/results/${mediaType}/${searchQuery}/1`
   );

   const type = mediaType === "movie" ? "Movies" : "TV Shows";
   return (
      <SearchCards
         title={`Founded ${type}`}
         mediaType={mediaType}
         mediaArray={media}
      />
   );
}
