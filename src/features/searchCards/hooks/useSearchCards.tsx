import API_PUBLIC from "@/api/public";
import { useEffect, useState } from "react";

export default function useSearchCards(url: string) {
   const [media, setMedia] = useState<any[] | null>(null);
   const [page, setPage] = useState<number>(1);

   useEffect(() => {
      const getData = async () => {
         console.log("fetching card");
         const { data } = await API_PUBLIC.get(`${url}/${page}`);
         if (page === 1) {
            setMedia(data.results);
         } else {
            setMedia((oldArray) => oldArray!.concat(data.results));
         }
      };
      getData();
   }, [url, page]);

   return { media, page, setPage };
}
