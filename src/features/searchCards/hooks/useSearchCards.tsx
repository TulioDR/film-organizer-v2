import API_PUBLIC from "@/api/public";
import { useEffect, useState } from "react";

export default function useSearchCards(
   url: string,
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
   const [media, setMedia] = useState<any[]>([]);
   const [page, setPage] = useState<number>(1);

   useEffect(() => {
      const getData = async () => {
         console.log("fetching cards");
         const { data } = await API_PUBLIC.get(`${url}/${page}`);
         if (page === 1) {
            setMedia(data.results);
         } else {
            setMedia((oldArray) => oldArray.concat(data.results));
         }
         setIsLoading(false);
      };
      getData();
   }, [url, setIsLoading, page]);

   return { media, page, setPage };
}
