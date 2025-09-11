import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useDiscoverSearch() {
   const [apiUrl, setApiUrl] = useState<string | null>(null);
   const { asPath, query } = useRouter();

   useEffect(() => {
      const { media_type } = query;
      if (media_type) {
         let filters = "";
         Object.keys(query).forEach((key) => {
            if (query[key] && key !== "media_type") {
               filters += `&${key}=${query[key]}`;
            }
         });
         setApiUrl(`/discover/${media_type}/${filters}`);
      } else {
         setApiUrl(null);
      }
   }, [asPath, query]);

   return { apiUrl };
}
