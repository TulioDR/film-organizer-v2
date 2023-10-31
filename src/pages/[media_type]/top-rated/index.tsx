import SearchCards from "@/features/searchCards/components/SearchCards";

export default function Trending() {
   return <SearchCards apiUrl="/top-rated" title="Top Rated" />;
}
