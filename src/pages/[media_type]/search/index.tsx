import { GetServerSideProps } from "next";
import SearchMedia from "@/features/searchMedia/components/SearchMedia";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { search_query } = context.query;
   return {
      props: { searchQuery: search_query },
   };
};

type Props = {
   searchQuery: string;
};

export default function Search({ searchQuery }: Props) {
   return (
      <SearchMedia apiUrl={`/search/${searchQuery}`} title={`Search results`} />
   );
}
