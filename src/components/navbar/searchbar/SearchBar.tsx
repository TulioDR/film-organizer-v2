import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import useSidebarContext from "../../../context/SidebarContext";
import QuickResult from "./QuickResult";

type Props = {};

export default function SearchBar({}: Props) {
   const { isMovie } = useSidebarContext();
   const router = useRouter();

   const [results, setResults] = useState<any[]>([]);
   const [showResults, setShowResults] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>("");
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

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
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const type = isMovie ? "movie" : "tv";
      const value = inputValue.toLowerCase();
      router.push(`/results/${type}?search_query=${value}`);
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="w-full sm:w-96 px-5 bg-gray-400 dark:bg-gray-600 h-9 rounded-lg flex items-center relative"
      >
         <input
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            type="text"
            className="outline-none flex-1 bg-transparent pr-5"
            placeholder={`Search ${isMovie ? "Movies" : "TV Shows"}`}
         />
         <span className="material-icons text-gray-400">search</span>

         {showResults && (
            <ul className="absolute left-0 top-full shadow-material bg-gray-400 w-full py-3 rounded-md">
               {results.map((media) => (
                  <QuickResult
                     key={media.id}
                     media={media}
                     setShowResults={setShowResults}
                  />
               ))}
            </ul>
         )}
      </form>
   );
}
