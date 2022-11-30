import { GetServerSideProps } from "next";
import SearchCards from "../../features/SearchCards/SearchCards";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType } = context.query;
   return {
      props: { mediaType },
   };
};

interface Props {
   mediaType: "tv" | "movie";
}

export default function Popular({ mediaType }: Props) {
   const type = mediaType === "movie" ? "Movies" : "TV Shows";
   return (
      <SearchCards
         url={`/api/popular/${mediaType}`}
         title={`Popular ${type}`}
         mediaType={mediaType}
      />
   );
}
