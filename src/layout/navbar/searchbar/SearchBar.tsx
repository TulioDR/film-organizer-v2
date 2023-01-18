import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import useSidebarContext from "../../../context/SidebarContext";
import QuickResult from "./QuickResult";
import ResultsContainer from "./ResultsContainer";
import SearchInput from "./SearchInput";

type Props = {};

export default function SearchBar({}: Props) {
   const { isMovie } = useSidebarContext();
   const router = useRouter();

   const [results, setResults] = useState<any[]>([]);
   const [inputValue, setInputValue] = useState<string>("");
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [showResults, setShowResults] = useState<boolean>(false);
   const [currentIndex, setCurrentIndex] = useState<number | null>(null);

   useEffect(() => {
      const getFoundedMedia = async () => {
         if (!isOnFocus) return;
         if (inputValue.length > 0) {
            const type = isMovie ? "movie" : "tv";
            const res = await fetch(`/api/results/${type}/${inputValue}/1`);
            const data = await res.json();
            setResults(data.results.slice(0, 5));
         } else {
            setResults([]);
         }
      };
      getFoundedMedia();
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
      <form
         onSubmit={handleSubmit}
         className={`w-full sm:w-96 px-5 bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-lg h-9 rounded-t-lg flex flex-col relative ${
            showResults ? "shadow-lg" : "rounded-b-lg"
         }`}
      >
         <SearchInput
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
         />
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
