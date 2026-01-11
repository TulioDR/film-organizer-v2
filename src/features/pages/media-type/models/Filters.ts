export interface SelectOption {
   value: string | number;
   label: string;
}

export interface MediaGenre {
   id: number;
   name: string;
}

export type FilterAction =
   | { type: "SET_MEDIA_TYPE"; payload: "movie" | "tv" }
   | { type: "SET_SORT"; payload: SelectOption }
   | { type: "SET_RATING"; payload: [number, number] }
   | { type: "TOGGLE_GENRE_INC"; payload: MediaGenre }
   | { type: "TOGGLE_GENRE_EXC"; payload: MediaGenre }
   | {
        type: "SET_DATES";
        payload: { startDate: Date | null; endDate: Date | null };
     }
   | { type: "SET_DURATION"; payload: [number, number] }
   | { type: "SET_LANGUAGE"; payload: SelectOption | null }
   | { type: "SET_COUNTRY"; payload: SelectOption | null }
   | { type: "RESET_FILTERS" };

export interface FilterState {
   mediaType: "movie" | "tv";
   sortBy: SelectOption;
   genresInc: MediaGenre[];
   genresExc: MediaGenre[];
   minRated: number;
   maxRated: number;
   dateRange: { startDate: Date | null; endDate: Date | null };
   minDuration: number;
   maxDuration: number;
   language: SelectOption | null;
   country: SelectOption | null;
}
