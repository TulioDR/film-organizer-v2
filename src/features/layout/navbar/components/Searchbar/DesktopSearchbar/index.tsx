import SearchInput from "./SearchInput";
import ToggleTypeButton from "./ToggleTypeButton";
import SBResults from "./SBResults";
import GlassContainer from "@/common/components/GlassContainer";
import SearchbarContainer from "./SearchbarContainer";
import useSearchbar from "../../../hooks/useSearchbar";

type Props = {};

export default function DesktopSearchbar({}: Props) {
   const {
      inputValue,
      mediaType,
      results,
      showResults,
      currentIndex,
      setCurrentIndex,
      handleInputChange,
      handleInputFocus,
      handleInputBlur,
      handleSubmit,
      setMediaType,
   } = useSearchbar();

   return (
      <SearchbarContainer handleSubmit={handleSubmit}>
         <GlassContainer
            className={`h-full flex ${showResults ? "rounded-b-none" : ""}`}
         >
            <SearchInput
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               mediaType={mediaType}
            />
            <ToggleTypeButton
               mediaType={mediaType}
               setMediaType={setMediaType}
            />
         </GlassContainer>
         {showResults && (
            <SBResults
               results={results}
               currentIndex={currentIndex}
               setCurrentIndex={setCurrentIndex}
               mediaType={mediaType}
            />
         )}
      </SearchbarContainer>
   );
}
