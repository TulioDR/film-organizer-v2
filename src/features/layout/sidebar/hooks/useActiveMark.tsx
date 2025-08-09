import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useActiveMark(
   link: string,
   mediaType?: "movie" | "tv"
) {
   const [isSelected, setIsSelected] = useState<boolean>(false);
   const router = useRouter();

   useEffect(() => {
      if (mediaType) {
         setIsSelected(router.query.media_type === mediaType);
         return;
      }
      const url = new URL(router.asPath, window.location.origin);
      const pathWithoutQueries = url.pathname;
      setIsSelected(pathWithoutQueries === link);
   }, [link, router.query.media_type, mediaType, router.asPath]);

   return { isSelected };
}
