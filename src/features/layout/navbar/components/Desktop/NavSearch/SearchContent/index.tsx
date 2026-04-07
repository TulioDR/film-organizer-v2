import React from "react";
import SearchKeys from "./SearchKeys";
import SearchType from "./SearchType";
import SearchContentContainer from "./SearchContentContainer";
import { Action, State } from "@/features/layout/navbar/models/ReducerModels";
import SearchMessage from "./SearchMessage";
import SearchResults from "./SearchResults";

type Props = {
   state: State;
   dispatch: React.Dispatch<Action>;
};

export default function SearchContent({ state, dispatch }: Props) {
   const { inputValue, results } = state;

   return (
      <SearchContentContainer>
         <SearchType dispatch={dispatch} />
         <div className="w-full h-96 overflow-hidden">
            {inputValue.length <= 1 ? (
               <SearchMessage message="Type at least 2 characters to see results" />
            ) : !results ? (
               <SearchMessage message="Loading..." />
            ) : results.length > 0 ? (
               <SearchResults state={state} dispatch={dispatch} />
            ) : (
               <SearchMessage message="The search did not return any results" />
            )}
         </div>
         <SearchKeys />
      </SearchContentContainer>
   );
}
