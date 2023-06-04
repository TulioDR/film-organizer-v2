import { useEffect, useState } from "react";

export default function useSearchCards(
   url: string,
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
   const [media, setMedia] = useState<any[]>([]);
   const [page, setPage] = useState<number>(1);

   useEffect(() => {
      const getData = async () => {
         console.log("fetch is running");
         const res = await fetch(`${url}/${page}`);
         const data = await res.json();
         if (page === 1) {
            setMedia(data.results);
         } else {
            setMedia((oldArray) => oldArray.concat(data.results));
         }
         setIsLoading(false);
      };
      getData();
   }, [url, setIsLoading, page]);

   useEffect(() => {
      const container = document.getElementById("scroll-container")!;
      const handleScroll = () => {
         const { scrollHeight, scrollTop, clientHeight } = container;
         const bottom = scrollHeight - scrollTop === clientHeight;
         if (bottom) {
            if (page >= 4) return;
            setPage((page) => page + 1);
         }
      };
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
   });

   return { media };
}
