import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ToggleTypeButton from "./ToggleTypeButton";
import SBResults from "./SBResults";
import API_PUBLIC from "@/api/public";

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
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      const timeoutId = setTimeout(async () => {
         if (!isOnFocus) return;
         if (inputValue.length > 0) {
            setIsLoading(true);
            const type = isMovie ? "movie" : "tv";
            const url = `/searchbar_results/${type}/${inputValue}/1`;
            const { data } = await API_PUBLIC.get(url);
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
         <div className={`flex items-center h-9`}>
            <ToggleTypeButton isMovie={isMovie} onClick={toggleMediaType} />
            <SearchInput
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               placeholder={`Search ${isMovie ? "Movies" : "Series"}`}
               showResults={showResults}
            />
         </div>
         {showResults && (
            <SBResults
               isLoading={isLoading}
               results={results}
               currentIndex={currentIndex}
               setCurrentIndex={setCurrentIndex}
               getDetails={getDetails}
            />
         )}
      </form>
   );
}
