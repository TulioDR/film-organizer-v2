import { StaticImageData } from "next/image";
import List from "./Playlist";

export default interface Store {
   theme: ThemeModel;
   sidebar: SidebarModel;
   lists: {
      lists: List[] | null;
   };
   bookmark: BookmarkModel;
   background: BackgroundModel;
   notification: NotificationModel;
   layout: LayoutModel;
   pageTitle: PageTitle;
   loader: LoaderStore;
}

interface ThemeModel {
   themeColor: string;
   themeColorName: string;
   isDarkMode: boolean;
}
interface SidebarModel {
   expandSidebar: boolean;
   revealSidebar: boolean;
}
interface BookmarkModel {
   isLoginAdviceOpen: boolean;
   isSaveMediaOpen: boolean;
   mediaToSave: null | {
      media: any;
      mediaType: "tv" | "movie";
   };
}
interface BackgroundModel {
   backgroundImage: string | StaticImageData | null;
   backgroundKey: string;
}

interface NotificationModel {
   notification: string | null;
   success: boolean;
}
interface LayoutModel {
   isHidden: boolean;
}

interface TitleSection {
   text: string;
   link: string;
}

interface PageTitle {
   title: [TitleSection, TitleSection | null, TitleSection | null];
}

interface LoaderStore {
   isLoading: boolean;
}
