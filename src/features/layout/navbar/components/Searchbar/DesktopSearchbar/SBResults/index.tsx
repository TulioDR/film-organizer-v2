import SBResultsItem from "./SBResultsItem";
import SBLoadingAnimation from "./SBLoadingAnimation";
import SBResultsContainer from "./SBResultsContainer";
import SBItemsContainer from "./SBItemsContainer";

type Props = {
   results: any[] | null;
   currentIndex: number | null;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
   mediaType: "movie" | "tv";
};

export default function SBResults({
   results,
   currentIndex,
   setCurrentIndex,
   mediaType,
}: Props) {
   return (
      <SBResultsContainer>
         {!results && <SBLoadingAnimation />}
         {results && (
            <>
               {results.length === 0 && <span>Nothing was found</span>}
               {results.length > 0 && (
                  <SBItemsContainer
                     resultsLength={results.length}
                     setCurrentIndex={setCurrentIndex}
                  >
                     {results.map((media, index) => (
                        <SBResultsItem
                           key={media.id}
                           media={media}
                           index={index}
                           currentIndex={currentIndex}
                           setCurrentIndex={setCurrentIndex}
                           mediaType={mediaType}
                        />
                     ))}
                  </SBItemsContainer>
               )}
            </>
         )}
      </SBResultsContainer>
   );
}
