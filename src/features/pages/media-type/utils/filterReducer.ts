import { FilterAction, FilterState } from "../models/Filters";

export const initialFilterState: FilterState = {
   mediaType: "movie",
   sortBy: { value: "popularity.desc", label: "Popularity Descending" },
   genresInc: [],
   genresExc: [],
   minRated: 0,
   maxRated: 10,
   dateRange: { startDate: null, endDate: null },
   minDuration: 0,
   maxDuration: 400,
   language: null,
   country: null,
};

export function filterReducer(
   state: FilterState,
   action: FilterAction,
): FilterState {
   switch (action.type) {
      case "SET_MEDIA_TYPE":
         return {
            ...state,
            mediaType: action.payload,
            sortBy: initialFilterState.sortBy,
            genresInc: [],
            genresExc: [],
         };

      case "SET_SORT":
         return { ...state, sortBy: action.payload };

      case "SET_RATING":
         return {
            ...state,
            minRated: action.payload[0],
            maxRated: action.payload[1],
         };

      case "TOGGLE_GENRE_INC": {
         const isCurrentlyIncluded = state.genresInc.find(
            (g) => g.id === action.payload.id,
         );
         return {
            ...state,
            genresInc: isCurrentlyIncluded
               ? state.genresInc.filter((g) => g.id !== action.payload.id)
               : [...state.genresInc, action.payload],
            genresExc: state.genresExc.filter(
               (g) => g.id !== action.payload.id,
            ),
         };
      }

      case "TOGGLE_GENRE_EXC": {
         const isCurrentlyExcluded = state.genresExc.find(
            (g) => g.id === action.payload.id,
         );
         return {
            ...state,
            genresExc: isCurrentlyExcluded
               ? state.genresExc.filter((g) => g.id !== action.payload.id)
               : [...state.genresExc, action.payload],
            genresInc: state.genresInc.filter(
               (g) => g.id !== action.payload.id,
            ),
         };
      }

      case "SET_DATES":
         return { ...state, dateRange: action.payload };

      case "SET_DURATION":
         return {
            ...state,
            minDuration: action.payload[0],
            maxDuration: action.payload[1],
         };

      case "SET_LANGUAGE":
         return { ...state, language: action.payload };

      case "SET_COUNTRY":
         return { ...state, country: action.payload };

      case "RESET_FILTERS":
         return initialFilterState;

      default:
         return state;
   }
}
