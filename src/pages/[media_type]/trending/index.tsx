import { GetServerSideProps } from "next";
import SearchCards from "@/features/searchCards/components/SearchCards";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType } = context.query;
   return {
      props: { mediaType },
   };
};

interface Props {
   mediaType: "tv" | "movie";
}

export default function Trending({ mediaType }: Props) {
   return <SearchCards apiUrl={`/trending/${mediaType}`} title="Popular" />;
}
