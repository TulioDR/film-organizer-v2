import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ToggleTypeButton from "./ToggleTypeButton";
import SBResults from "./SBResults";
import API_PUBLIC from "@/api/public";
import { motion } from "framer-motion";
import GlassContainer from "@/components/GlassContainer";

type Props = {};

export default function Searchbar({}: Props) {
   const router = useRouter();

   const [isMovie, setIsMovie] = useState<boolean>(false);

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
            const url = `/${media_type}/results/${inputValue}/1`;
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
         router.push(`/${type}/results?search_query=${value}`);
      } else {
         getDetails(currentIndex);
      }
   };

   const [isHome, setIsHome] = useState<boolean>(false);
   useEffect(() => {
      if (router.pathname === "/") setIsHome(true);
      else setIsHome(false);
   }, [router.pathname]);

   return (
      <motion.div
         initial={false}
         animate={{ top: isHome ? "50%" : 0, y: isHome ? "-50%" : 0 }}
         transition={{ duration: 0.6, ease: "easeInOut" }}
         className="pointer-events-none flex justify-center items-center fixed w-screen h-32 z-50"
      >
         <form
            onSubmit={handleSubmit}
            className="h-16 relative pointer-events-auto"
         >
            <GlassContainer
               className={`h-full overflow-hidden flex 
                  ${showResults ? "rounded-b-none" : ""}
               `}
            >
               <SearchInput
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder={`Search ${isMovie ? "Movies" : "Series"}`}
               />
               <ToggleTypeButton isMovie={isMovie} setIsMovie={setIsMovie} />
            </GlassContainer>
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
      </motion.div>
   );
}
