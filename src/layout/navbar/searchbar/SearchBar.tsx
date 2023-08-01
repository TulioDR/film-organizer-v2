import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import QuickResult from "./QuickResult";
import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";
import ToggleModeButton from "./ToggleModeButton";
import { SpinnerCircularFixed } from "spinners-react";

import { useSelector } from "react-redux";

type Props = {};

export default function SearchBar({}: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   const router = useRouter();

   const [isMovie, setIsMovie] = useState<boolean>(false);
   const toggleMediaType = () => setIsMovie((prev) => !prev);

   const [results, setResults] = useState<any[]>([]);
   const [inputValue, setInputValue] = useState<string>("");
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [showResults, setShowResults] = useState<boolean>(false);
   const [currentIndex, setCurrentIndex] = useState<number | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      const timeoutId = setTimeout(async () => {
         if (!isOnFocus) return;
         if (inputValue.length > 0) {
            setIsLoading(true);
            const type = isMovie ? "movie" : "tv";
            const res = await fetch(`/api/results/${type}/${inputValue}/1`);
            const data = await res.json();
            setResults(data.results.slice(0, 5));
            setShowResults(true);
            setIsLoading(false);
         } else {
            setResults([]);
            setShowResults(false);
         }
      }, 300);
      return () => clearTimeout(timeoutId);
   }, [inputValue, isMovie, isOnFocus]);

   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
   };
   const handleInputFocus = () => {
      setIsOnFocus(true);
   };
   const handleInputBlur = () => {
      setIsOnFocus(false);
      setShowResults(false);
   };

   const getDetails = (index: number) => {
      const type = isMovie ? "movie" : "tv";
      const id = results[index].id;
      router.push(`/${type}/${id}`);
      setShowResults(false);
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setShowResults(false);
      if (currentIndex === null) {
         const type = isMovie ? "movie" : "tv";
         const value = inputValue.toLowerCase();
         router.push(`/results/${type}?search_query=${value}`);
      } else {
         getDetails(currentIndex);
      }
   };

   return (
      <form onSubmit={handleSubmit} className={`h-full relative`}>
         <div
            className={`flex h-full shadow-lg rounded-t-lg bg-secondary ${
               showResults ? "shadow-lg" : "rounded-b-lg"
            }`}
         >
            <ToggleModeButton
               isMovie={isMovie}
               onClick={toggleMediaType}
               showResults={showResults}
            />
            <SearchInput
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               placeholder={`Search ${isMovie ? "Movies" : "Series"}`}
            />
         </div>
         {showResults && (
            <ResultsContainer
               showResults={showResults}
               results={results}
               setCurrentIndex={setCurrentIndex}
            >
               {isLoading ? (
                  <div className="w-full grid place-content-center h-40">
                     <SpinnerCircularFixed
                        size={50}
                        thickness={100}
                        speed={100}
                        color={themeColor}
                        secondaryColor="rgba(0, 0, 0, 0.44)"
                     />
                  </div>
               ) : results.length ? (
                  results.map((media, index) => (
                     <QuickResult
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
            </ResultsContainer>
         )}
      </form>
   );
}
