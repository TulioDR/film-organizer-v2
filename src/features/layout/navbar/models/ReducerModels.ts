export interface State {
   isSearchOpen: boolean;
   inputValue: string;
   mediaType: "movie" | "tv";
   results: any[] | null;
   currentIndex: number | null;
}

export type Action =
   | { type: "SET_INPUT_VALUE"; payload: string }
   | { type: "START_LOADING" }
   | { type: "SET_RESULTS"; payload: any[] }
   | { type: "CHANGE_MEDIA_TYPE"; payload: "movie" | "tv" }
   | { type: "SET_CURRENT_INDEX"; payload: number | null }
   | { type: "OPEN_SEARCH" }
   | { type: "CLOSE_SEARCH" };
