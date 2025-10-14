import { Action, State } from "../models/ReducerModels";

const searchbarReducer = (state: State, action: Action): State => {
   switch (action.type) {
      case "SET_INPUT_VALUE":
         return { ...state, inputValue: action.payload };
      case "HANDLE_INPUT_BLUR":
         return { ...state, showResults: false, currentIndex: null };
      case "HANDLE_INPUT_FOCUS":
         if (state.inputValue.length > 0)
            return { ...state, showResults: true };
      case "START_LOADING":
         return { ...state, results: null, currentIndex: null };
      case "REMOVE_RESULTS":
         return { ...state, showResults: false };
      case "SET_RESULTS":
         return { ...state, results: action.payload, showResults: true };
      case "HIDE_RESULTS":
         return { ...state, showResults: false };
      case "CHANGE_MEDIA_TYPE":
         return { ...state, mediaType: action.payload };
      case "SET_CURRENT_INDEX":
         return { ...state, currentIndex: action.payload };
   }
};
export default searchbarReducer;
