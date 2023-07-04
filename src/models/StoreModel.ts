import { StaticImageData } from "next/image";

export interface ThemeModel {
   themeColor: string;
}
export interface SidebarModel {
   expandSidebar: boolean;
   revealSidebar: boolean;
}
export interface ListsModel {
   lists: any[];
}
export interface BookmarkModel {
   isLoginAdviceOpen: boolean;
   isSaveMediaOpen: boolean;
   mediaToSave: null | {
      media: any;
      mediaType: "tv" | "movie";
   };
}
export interface BackgroundModel {
   backgroundImage: string | StaticImageData | null;
   backgroundKey: string;
}
export interface PosterAnimationModel {
   animatePoster: boolean;
}
export interface NotificationModel {
   notification: string | null;
   success: boolean;
}

export default interface StoreModel {
   theme: ThemeModel;
   sidebar: SidebarModel;
   lists: ListsModel;
   bookmark: BookmarkModel;
   background: BackgroundModel;
   posterAnimation: PosterAnimationModel;
   notification: NotificationModel;
}
