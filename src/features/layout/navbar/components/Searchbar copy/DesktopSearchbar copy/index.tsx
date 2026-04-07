import SearchInput from "./SearchInput";
import ToggleTypeButton from "./ToggleTypeButton";
import SBResults from "./SBResults";
import GlassContainer from "@/common/components/GlassContainer";
import SearchbarContainer from "./SearchbarContainer";
import useSearchbar from "../../../hooks/useSearchbar";

export default function DesktopSearchbar() {
   const { state, dispatch, handleSubmit } = useSearchbar();

   const { showResults, mediaType } = state;

   return (
      <SearchbarContainer handleSubmit={handleSubmit}>
         <GlassContainer
            className={`h-full flex ${showResults ? "rounded-b-none" : ""}`}
         >
            <SearchInput state={state} dispatch={dispatch} />
            <ToggleTypeButton mediaType={mediaType} dispatch={dispatch} />
         </GlassContainer>
         {showResults && <SBResults state={state} dispatch={dispatch} />}
      </SearchbarContainer>
   );
}
