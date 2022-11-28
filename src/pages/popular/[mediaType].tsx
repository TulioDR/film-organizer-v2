import { GetServerSideProps } from "next";
import SearchCards from "../../features/SearchCards/SearchCards";
import useSearchCards from "../../features/SearchCards/useSearchCards";

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
   const { media } = useSearchCards(`/api/popular/${mediaType}/1`);

   const type = mediaType === "movie" ? "Movies" : "TV Shows";
   return (
      <SearchCards
         title={`Popular ${type}`}
         mediaType={mediaType}
         mediaArray={media}
      />
   );
}
