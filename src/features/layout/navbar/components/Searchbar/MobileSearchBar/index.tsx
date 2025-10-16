import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import ReactLenis from "lenis/react";
import API_PUBLIC from "@/api/public";
import SBMobileInitialText from "./SBMobileInitialText";
import SBMobileLoading from "./SBMobileLoading";
import SBMobileNotFound from "./SBMobileNotFound";
import SBMobileResult from "./SBMobileResult";

type Props = {};

export default function MobileSearchbar({}: Props) {
   const [isMovie, setIsMovie] = useState<boolean>(true);
   const [inputValue, setInputValue] = useState<string>("");
   const [results, setResults] = useState<any[] | null>(null);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
   };

   const toggleMediaType = () => {
      setIsMovie((prev) => !prev);
   };

   useEffect(() => {
      setResults(null);
      if (inputValue.length === 0) return;
      const mediaType = isMovie ? "movie" : "tv";
      const timeoutId = setTimeout(async () => {
         const url = `/${mediaType}/results/${inputValue}/1`;
         const { data } = await API_PUBLIC.get(url);
         setResults(data.results);
      }, 300);
      return () => clearTimeout(timeoutId);
   }, [inputValue, isMovie]);

   return (
      <div className="w-full h-full flex flex-col gap-2 text-xs sm:text-sm">
         <SearchInput
            toggleMediaType={toggleMediaType}
            isMovie={isMovie}
            value={inputValue}
            onChange={handleInputChange}
         />
         {inputValue.length === 0 && <SBMobileInitialText />}
         {inputValue.length > 0 && !results && <SBMobileLoading />}
         {inputValue.length > 0 && results && (
            <>
               {results.length === 0 && <SBMobileNotFound />}
               {results.length > 0 && (
                  <ReactLenis className="w-full flex-1 overflow-hidden">
                     <div className="w-full flex flex-col gap-1 pb-2">
                        {results.map((item) => (
                           <SBMobileResult key={item.id} item={item} />
                        ))}
                     </div>
                  </ReactLenis>
               )}
            </>
         )}
      </div>
   );
}
