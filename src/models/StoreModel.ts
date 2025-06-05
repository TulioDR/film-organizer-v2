import { StaticImageData } from "next/image";
import ListModel from "./ListModel";
import { MediaModel } from "./MediaModel";

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
interface SelectedMediaModel {
   selectedMedia: MediaModel | null;
   cardHeight: number | null;
   isFixed: boolean;
}

export default interface StoreModel {
   theme: ThemeModel;
   sidebar: SidebarModel;
   lists: {
      lists: ListModel[] | null;
   };
   bookmark: BookmarkModel;
   background: BackgroundModel;
   notification: NotificationModel;
   layout: LayoutModel;
   selectedMedia: SelectedMediaModel;
}
