import SearchMedia from "@/features/search-media/components/SearchMedia";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { search_query } = context.query;
   return {
      props: { searchQuery: search_query },
   };
};

type Props = {
   searchQuery: string;
};

export default function Results({ searchQuery }: Props) {
   return (
      <SearchMedia apiUrl={`/search/${searchQuery}`} title={`Search results`} />
   );
}
