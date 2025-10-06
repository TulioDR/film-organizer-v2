import API_PUBLIC from "@/api/public";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

export default function useSearchbar() {
   const router = useRouter();

   const [results, setResults] = useState<any[] | null>(null);
   const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");
   const [inputValue, setInputValue] = useState<string>("");
   const [showResults, setShowResults] = useState<boolean>(false);
   const [currentIndex, setCurrentIndex] = useState<number | null>(null);

   useEffect(() => {
      const query = router.query.search_query as string | undefined;
      setInputValue(query || "");
   }, [router.query.search_query]);

   useEffect(() => {
      setResults(null);
      const timeoutId = setTimeout(async () => {
         if (inputValue.length > 0) {
            const url = `/${mediaType}/results/${inputValue}/1`;
            const { data } = await API_PUBLIC.get(url);
            setResults(data.results);
            setShowResults(true);
         } else {
            setResults(null);
            setShowResults(false);
         }
      }, 300);
      return () => clearTimeout(timeoutId);
   }, [inputValue, mediaType]);

   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
   };
   const handleInputFocus = () => {
      if (inputValue.length > 0) setShowResults(true);
   };
   const handleInputBlur = () => {
      setShowResults(false);
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setShowResults(false);
      if (currentIndex === null) {
         const value = inputValue.toLowerCase();
         router.push(`/${mediaType}/results?search_query=${value}&page=1`);
      } else {
         const id = results![currentIndex].id;
         router.push(`/${mediaType}/${id}`);
      }
   };

   return {
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
   };
}
