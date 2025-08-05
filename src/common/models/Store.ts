import { StaticImageData } from "next/image";
import List from "./List";

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
