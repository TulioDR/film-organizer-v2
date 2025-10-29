import SBLoadingAnimation from "./SBLoadingAnimation";
import SBResultsContainer from "./SBResultsContainer";
import { Action, State } from "@/features/layout/navbar/models/ReducerModels";
import SBResultsItems from "./SBResultsItems";

type Props = {
   dispatch: React.Dispatch<Action>;
   state: State;
};

export default function SBResults({ dispatch, state }: Props) {
   const { results } = state;

   return (
      <SBResultsContainer>
         {!results && <SBLoadingAnimation />}
         {results && (
            <>
               {results.length === 0 && <span>Nothing was found</span>}
               {results.length > 0 && (
                  <SBResultsItems
                     dispatch={dispatch}
                     state={state}
                     results={results}
                     length={results.length}
                  />
               )}
            </>
         )}
      </SBResultsContainer>
   );
}
