export interface PageInfoModel {
   title: string;
   apiUrl: string;
   pathname: string;
}
const SEARCH_PAGES: PageInfoModel[] = [
   {
      title: "Popular",
      apiUrl: "/popular",
      pathname: "/[media_type]/popular",
   },
   {
      title: "Top Rated",
      apiUrl: "/top-rated",
      pathname: "/[media_type]/top-rated",
   },
   {
      title: "Trending",
      apiUrl: "/trending",
      pathname: "/[media_type]/trending",
   },
   {
      title: "Results",
      apiUrl: `/results`,
      pathname: `/[media_type]/results`,
   },
   {
      title: "Genres",
      apiUrl: `/genres`,
      pathname: `/[media_type]/genres/[genre_id]`,
   },
];
export default SEARCH_PAGES;
