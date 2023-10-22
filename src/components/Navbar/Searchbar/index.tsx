import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ToggleTypeButton from "./ToggleTypeButton";
import SBResults from "./SBResults";
import API_PUBLIC from "@/api/public";
import { useAnimationControls } from "framer-motion";

type Props = {};

export default function Searchbar({}: Props) {
   const router = useRouter();

   const [isMovie, setIsMovie] = useState<boolean>(false);
   const toggleMediaType = () => setIsMovie((prev) => !prev);

   const [results, setResults] = useState<any[]>([]);
   const [inputValue, setInputValue] = useState<string>("");
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [showResults, setShowResults] = useState<boolean>(false);
   const [currentIndex, setCurrentIndex] = useState<number | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { search_query } = router.query;
   useEffect(() => {
      const query = search_query as string | undefined;
      setInputValue(query || "");
   }, [search_query]);

   useEffect(() => {
      const timeoutId = setTimeout(async () => {
         if (!isOnFocus) return;
         if (inputValue.length > 0) {
            setIsLoading(true);
            const media_type = isMovie ? "movie" : "tv";
            const url = `/${media_type}/search/${inputValue}/1`;
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
         router.push(`/${type}/search?search_query=${value}`);
      } else {
         getDetails(currentIndex);
      }
   };

   const inputControls = useAnimationControls();
   const innerInputAnimation = useAnimationControls();

   return (
      <div className="h-full pointer-events-auto flex-1 sm:flex-initial">
         <form onSubmit={handleSubmit} className={`h-full relative`}>
            <div className="flex h-10 relative w-full sm:w-96">
               <ToggleTypeButton
                  isMovie={isMovie}
                  onClick={toggleMediaType}
                  inputControls={inputControls}
                  innerInputAnimation={innerInputAnimation}
               />
               <SearchInput
                  value={inputValue}
                  showResults={showResults}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder={`Search ${isMovie ? "Movies" : "Series"}`}
                  inputControls={inputControls}
                  innerInputAnimation={innerInputAnimation}
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
      </div>
   );
}
