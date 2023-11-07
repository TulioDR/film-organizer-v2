import SBResultsItem from "./SBResultsItem";
import SBLoadingAnimation from "./SBLoadingAnimation";
import SBResultsContainer from "./SBResultsContainer";

type Props = {
   isLoading: boolean;
   results: any[];
   currentIndex: number | null;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
   getDetails: (index: number) => void;
};

export default function SBResults({
   isLoading,
   results,
   currentIndex,
   setCurrentIndex,
   getDetails,
}: Props) {
   return (
      <SBResultsContainer
         resultsLength={results.length}
         setCurrentIndex={setCurrentIndex}
      >
         {isLoading ? (
            <SBLoadingAnimation />
         ) : results.length ? (
            results.map((media, index) => (
               <SBResultsItem
                  key={media.id}
                  media={media}
                  index={index}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  getDetails={getDetails}
               />
            ))
         ) : (
            <div className="w-full px-5 h-10 grid place-content-center">
               Nothing was found
            </div>
         )}
      </SBResultsContainer>
   );
}
