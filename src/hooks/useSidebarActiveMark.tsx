import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
   mediaType: "movie" | "tv" | undefined;
   link: string;
};

export default function useSidebarActiveMark({ mediaType, link }: Props) {
   const [isSelected, setIsSelected] = useState<boolean>(false);
   const { asPath, query } = useRouter();
   const { mediaType: queryMediaType } = query;

   useEffect(() => {
      if (mediaType) {
         if (queryMediaType === mediaType) setIsSelected(true);
         else setIsSelected(false);
         return;
      }
      if (asPath === link) setIsSelected(true);
      else setIsSelected(false);
   }, [asPath, link, queryMediaType, mediaType]);

   return { isSelected };
}
