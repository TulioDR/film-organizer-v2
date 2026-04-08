import { NavigationModel } from "../models/NavigationModels";

const NAVIGATION_ITEMS: NavigationModel[] = [
   { link: "/", icon: "home", text: "Home" },
   {
      link: "/movie",
      icon: "movie",
      text: "Movies",
      mediaType: "movie",
   },
   {
      link: "/tv",
      icon: "tv",
      text: "Series",
      mediaType: "tv",
   },
   { link: "/lists", icon: "format_list_bulleted", text: "Playlists" },
];

export { NAVIGATION_ITEMS };
