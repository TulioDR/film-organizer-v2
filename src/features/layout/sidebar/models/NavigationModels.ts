export interface NavigationModel extends SubNavigationModel {
   mediaType?: "movie" | "tv";
   items?: SubNavigationModel[];
}

export interface SubNavigationModel {
   link: string;
   icon: string;
   text: string;
}
