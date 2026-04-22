import { Action, State } from "../models/ReducerModels";

const searchbarReducer = (state: State, action: Action): State => {
   switch (action.type) {
      case "SET_INPUT_VALUE":
         return { ...state, inputValue: action.payload };
      case "START_LOADING":
         return { ...state, results: [], isLoading: true, currentIndex: null };
      case "SET_RESULTS":
         return { ...state, results: action.payload, isLoading: false };
      case "CHANGE_MEDIA_TYPE":
         return { ...state, mediaType: action.payload };
      case "SET_CURRENT_INDEX":
         return { ...state, currentIndex: action.payload };
      case "OPEN_SEARCH":
         return { ...state, isSearchOpen: true };
      case "CLOSE_SEARCH":
         return { ...state, isSearchOpen: false, currentIndex: null };
   }
};
export default searchbarReducer;
