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
   mediaToSave: null | {
      media: any;
      mediaType: "tv" | "movie";
   };
}

export default interface StoreModel {
   theme: ThemeModel;
   sidebar: SidebarModel;
   lists: ListsModel;
   bookmark: BookmarkModel;
}