import { useEffect, useReducer } from "react";
import { State } from "../models/ReducerModels";
import searchbarReducer from "../utils/searchbarReducer";
import axios from "axios";

const initialState: State = {
   isSearchOpen: false,
   inputValue: "",
   mediaType: "movie",
   results: [],
   currentIndex: null,
};

export default function useSearch() {
   const [state, dispatch] = useReducer(searchbarReducer, initialState);
   const { inputValue, mediaType } = state;

   useEffect(() => {
      dispatch({ type: "START_LOADING" });
      if (inputValue.length <= 1) return;

      const timeoutId = setTimeout(async () => {
         const url = `/${mediaType}/results/${inputValue}/1`;
         const { data } = await axios.get("/api/public" + url);
         console.log("data");
         console.log(data);
         dispatch({ type: "SET_RESULTS", payload: data.results });
      }, 300);
      return () => clearTimeout(timeoutId);
   }, [inputValue, mediaType]);

   return { state, dispatch };
}
