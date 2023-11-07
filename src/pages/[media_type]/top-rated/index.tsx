import SearchMedia from "@/features/searchMedia/components/SearchMedia";

export default function Trending() {
   return <SearchMedia apiUrl="/top-rated" title="Top Rated" />;
}
