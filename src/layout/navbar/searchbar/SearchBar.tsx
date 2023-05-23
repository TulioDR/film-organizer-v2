import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import QuickResult from "./QuickResult";
import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";
import ToggleModeButton from "./ToggleModeButton";

type Props = {};

export default function SearchBar({}: Props) {
   const router = useRouter();

   const [isMovie, setIsMovie] = useState<boolean>(false);
   const toggleMediaType = () => setIsMovie((prev) => !prev);

   const [results, setResults] = useState<any[]>([]);
   const [inputValue, setInputValue] = useState<string>("");
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [showResults, setShowResults] = useState<boolean>(false);
   const [currentIndex, setCurrentIndex] = useState<number | null>(null);

   useEffect(() => {
      const timeoutId = setTimeout(async () => {
         if (!isOnFocus) return;
         if (inputValue.length > 0) {
            const type = isMovie ? "movie" : "tv";
            const res = await fetch(`/api/results/${type}/${inputValue}/1`);
            const data = await res.json();
            setResults(data.results.slice(0, 5));
         } else {
            setResults([]);
         }
      }, 400);
      return () => {
         clearTimeout(timeoutId);
      };
   }, [inputValue, isMovie, isOnFocus]);

   useEffect(() => {
      if (results.length > 0) setShowResults(true);
      else setShowResults(false);
   }, [results]);

   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
   };
   const handleInputFocus = () => {
      setIsOnFocus(true);
      if (inputValue.length) setShowResults(true);
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
            <SearchInput
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               placeholder={`Search ${isMovie ? "Movies" : "Series"}`}
            />
            <ToggleModeButton
               isMovie={isMovie}
               onClick={toggleMediaType}
               showResults={showResults}
            />
         </div>
         {showResults && (
            <ResultsContainer
               showResults={showResults}
               results={results}
               setCurrentIndex={setCurrentIndex}
            >
               {results.map((media, index) => (
                  <QuickResult
                     key={media.id}
                     media={media}
                     index={index}
                     currentIndex={currentIndex}
                     setCurrentIndex={setCurrentIndex}
                     getDetails={getDetails}
                  />
               ))}
            </ResultsContainer>
         )}
      </form>
   );
}
