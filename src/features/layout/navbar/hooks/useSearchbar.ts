import API_PUBLIC from "@/api/public";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useReducer } from "react";
import { State } from "../models/ReducerModels";
import searchbarReducer from "../utils/searchbarReducer";

const initialState: State = {
   inputValue: "",
   mediaType: "movie",
   results: null,
   showResults: false,
   currentIndex: null,
};

export default function useSearchbar() {
   const router = useRouter();
   const [state, dispatch] = useReducer(searchbarReducer, initialState);
   const { inputValue, results, mediaType, currentIndex } = state;

   useEffect(() => {
      const query = router.query.search_query as string | undefined;
      if (query) dispatch({ type: "SET_INPUT_VALUE", payload: query });
   }, [router.query.search_query]);

   useEffect(() => {
      dispatch({ type: "START_LOADING" });
      if (inputValue.length === 0) {
         dispatch({ type: "REMOVE_RESULTS" });
         return;
      }
      const timeoutId = setTimeout(async () => {
         const url = `/${mediaType}/results/${inputValue}/1`;
         const { data } = await API_PUBLIC.get(url);
         dispatch({ type: "SET_RESULTS", payload: data.results });
      }, 300);
      return () => clearTimeout(timeoutId);
   }, [inputValue, mediaType]);

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      dispatch({ type: "HIDE_RESULTS" });
      if (currentIndex === null) {
         const value = inputValue.toLowerCase();
         router.push(`/${mediaType}/results?search_query=${value}&page=1`);
      } else {
         const id = results![currentIndex].id;
         router.push(`/${mediaType}/${id}`);
      }
   };

   return { state, dispatch, handleSubmit };
}
