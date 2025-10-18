import {
   NavigationModel,
   SubNavigationModel,
} from "../models/NavigationModels";

const MOVIE_SUB_NAVIGATION: SubNavigationModel[] = [
   {
      link: "/movie/popular",
      icon: "local_fire_department",
      text: "Popular",
   },
   { link: "/movie/genres", icon: "theater_comedy", text: "Genres" },
   { link: "/movie/trending", icon: "trending_up", text: "Trending" },
   { link: "/movie/top-rated", icon: "star", text: "Top Rated" },
];
const TV_SUB_NAVIGATION: SubNavigationModel[] = [
   { link: "/tv/popular", icon: "local_fire_department", text: "Popular" },
   { link: "/tv/genres", icon: "theater_comedy", text: "Genres" },
   { link: "/tv/trending", icon: "trending_up", text: "Trending" },
   { link: "/tv/top-rated", icon: "star", text: "Top Rated" },
];

const NAVIGATION_ITEMS: NavigationModel[] = [
   { link: "/", icon: "home", text: "Home" },
   {
      link: "/movie",
      icon: "movie",
      text: "Movies",
      mediaType: "movie",
      items: MOVIE_SUB_NAVIGATION,
   },
   {
      link: "/tv",
      icon: "tv",
      text: "TV",
      mediaType: "tv",
      items: TV_SUB_NAVIGATION,
   },
   { link: "/discover", icon: "travel_explore", text: "Discover" },
   { link: "/lists", icon: "format_list_bulleted", text: "Playlists" },
];

export { NAVIGATION_ITEMS, MOVIE_SUB_NAVIGATION, TV_SUB_NAVIGATION };
