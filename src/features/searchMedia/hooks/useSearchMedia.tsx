import API_PUBLIC from "@/api/public";
import { useEffect, useState } from "react";

export default function useSearchMedia(
   url: string,
   setTotalPages: React.Dispatch<React.SetStateAction<number>>,
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
   const [media, setMedia] = useState<any[]>([]);

   useEffect(() => {
      const getData = async () => {
         setIsLoading(true);
         const { data } = await API_PUBLIC.get(url);
         console.log(data);
         setMedia(data.results);
         if (data.total_pages > 20) setTotalPages(20);
         else setTotalPages(data.total_pages);
         setIsLoading(false);
      };
      getData();
   }, [url]);

   return { media };
}
