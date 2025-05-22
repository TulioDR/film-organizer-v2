import { useRouter } from "next/router";
import { useState } from "react";

export default function useApiUrl() {
   const router = useRouter();

   const [apiUrl, setApiUrl] = useState<string | null>(null);
   const setDiscoverApi = () => {
      const { query } = router;
      const media_type = router.query.media_type;
      if (!media_type) {
         setApiUrl(null);
         return;
      }
      let filters = "";
      Object.keys(query).forEach((key) => {
         if (query[key] && key !== "media_type") {
            filters += `&${key}=${query[key]}`;
         }
      });
      setApiUrl(`/discover/${media_type}/${filters}`);
   };

   const setResultsApi = () => {
      const media_type = router.query.media_type;
      const search_query = router.query.search_query;
      const page = router.query.page;
      setApiUrl(`/${media_type}/results/${search_query}/${page}`);
   };

   const setGenresApi = () => {
      const media_type = router.query.media_type;
      const genre_id = router.query.genre_id;
      const page = router.query.page;
      setApiUrl(`/${media_type}/genres/${genre_id}/${page}`);
   };

   const setNormalApi = () => {
      const media_type = router.query.media_type;
      const part = router.pathname.split("/")[2];
      const page = router.query.page;
      setApiUrl(`/${media_type}/${part}/${page}`);
   };

   return { apiUrl, setDiscoverApi, setResultsApi, setGenresApi, setNormalApi };
}
