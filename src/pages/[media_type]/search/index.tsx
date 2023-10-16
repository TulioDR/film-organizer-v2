import { GetServerSideProps } from "next";
import SearchCards from "@/features/searchCards/components/SearchCards";

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
      <SearchCards apiUrl={`/search/${searchQuery}`} title={`Search results`} />
   );
}
