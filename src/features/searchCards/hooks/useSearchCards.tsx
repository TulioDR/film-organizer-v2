import API_PUBLIC from "@/api/public";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useSearchCards(url: string) {
   const [media, setMedia] = useState<any[] | null>(null);
   const [totalPages, setTotalPages] = useState<number>(0);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const { query } = useRouter();
   const { page } = query;

   useEffect(() => {
      const getData = async () => {
         setIsLoading(true);
         const { data } = await API_PUBLIC.get(`${url}/${page || 1}`);
         console.log(data);
         setMedia(data.results);
         if (data.total_pages > 20) setTotalPages(20);
         else setTotalPages(data.total_pages);
         setIsLoading(false);
      };
      getData();
   }, [url, page]);

   return { media, totalPages, isLoading };
}
