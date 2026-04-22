import React, { useEffect } from "react";
import SearchKeys from "./SearchKeys";
import SearchType from "./SearchType";
import SearchContentContainer from "./SearchContentContainer";
import { Action, State } from "@/features/layout/navbar/models/ReducerModels";
import SearchMessage from "./SearchMessage";
import SearchResults from "./SearchResults";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";

type Props = {
   state: State;
   dispatch: React.Dispatch<Action>;
};

export default function SearchContent({ state, dispatch }: Props) {
   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === "Escape") dispatch({ type: "CLOSE_SEARCH" });
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
         document.removeEventListener("keydown", handleEscape);
      };
   }, [dispatch]);

   useEffect(() => {
      console.log(state.results);
   }, [state.results]);

   return (
      <SearchContentContainer>
         <SearchType state={state} dispatch={dispatch} />
         <div className="w-full flex-1 overflow-hidden">
            {state.inputValue.length <= 1 ? (
               <SearchMessage message="Type at least 2 characters to see results" />
            ) : state.isLoading ? (
               <SearchMessage message="Loading..." />
            ) : state.results.length > 0 ? (
               <SearchResults
                  state={state}
                  dispatch={dispatch}
                  results={state.results}
               />
            ) : (
               <SearchMessage message="The search did not return any results" />
            )}
         </div>
         <Responsive minWidth={XL_MEDIA_QUERY}>
            <SearchKeys />
         </Responsive>
      </SearchContentContainer>
   );
}
