export interface State {
   results: any[] | null;
   inputValue: string;
   mediaType: "movie" | "tv";
   showResults: boolean;
   currentIndex: number | null;
}

export type Action =
   | { type: "SET_INPUT_VALUE"; payload: string }
   | { type: "HANDLE_INPUT_BLUR" }
   | { type: "HANDLE_INPUT_FOCUS" }
   | { type: "START_LOADING" }
   | { type: "SET_RESULTS"; payload: any[] }
   | { type: "REMOVE_RESULTS" }
   | { type: "HIDE_RESULTS" }
   | { type: "CHANGE_MEDIA_TYPE"; payload: "movie" | "tv" }
   | { type: "SET_CURRENT_INDEX"; payload: number | null };
