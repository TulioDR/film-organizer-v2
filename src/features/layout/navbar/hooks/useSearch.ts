import { useEffect, useReducer } from "react";
import { State } from "../models/ReducerModels";
import searchbarReducer from "../utils/searchbarReducer";

import axios from "axios";

const getBaseURL = () => {
   if (typeof window !== "undefined") return "/api/public";
   return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/public`;
};
const API = axios.create({ baseURL: getBaseURL() });

const initialState: State = {
   isSearchOpen: false,
   inputValue: "",
   mediaType: "movie",
   results: [],
   currentIndex: null,
   isLoading: false,
};

export default function useSearch() {
   const [state, dispatch] = useReducer(searchbarReducer, initialState);
   const { inputValue, mediaType } = state;

   useEffect(() => {
      dispatch({ type: "START_LOADING" });
      if (inputValue.length <= 1) return;
      console.log(inputValue, "right");
      const timeoutId = setTimeout(async () => {
         try {
            console.log(inputValue, "try");
            const url = `/${mediaType}/results/${inputValue}/1`;
            const { data } = await API.get(url);
            console.log("data");
            console.log(data);

            dispatch({ type: "SET_RESULTS", payload: data.results });
         } catch (error) {
            console.log("wrong");
            console.log(error);
         }
      }, 300);
      return () => clearTimeout(timeoutId);
   }, [inputValue, mediaType]);

   return { state, dispatch };
}
