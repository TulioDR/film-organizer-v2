import { useEffect, useState } from "react";
import usePageLoadingContext from "../../context/PageLoadingContext";

export default function useSearchCards(url: string) {
   const [media, setMedia] = useState<any[]>([]);
   const { setIsLoading } = usePageLoadingContext();

   useEffect(() => {
      const getData = async () => {
         console.log("fetch is running");
         const res = await fetch(url);
         const data = await res.json();
         setMedia(data.results);
         setIsLoading(false);
      };
      getData();
   }, [url, setIsLoading]);
   return { media };
}
