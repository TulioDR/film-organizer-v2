import MediaCard from "@/features/mediaCard/components/MediaCard";
import useSearchMedia from "../../hooks/useSearchMedia";

import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
   apiUrl: string;
   setTotalPages: React.Dispatch<React.SetStateAction<number>>;
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchMediaHandler({
   apiUrl,
   setTotalPages,
   setIsLoading,
}: Props) {
   const { media } = useSearchMedia(apiUrl, setTotalPages, setIsLoading);

   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";

   const [isExiting, setIsExiting] = useState<boolean>(false);

   const [layoutId, setLayoutId] = useState<string | null>(null);
   return (
      <>
         <SearchMediaCardsContainer>
            {media!.map((media) => (
               <MediaCard
                  key={media.id}
                  media={media}
                  mediaType={mediaType}
                  isExiting={isExiting}
                  setIsExiting={setIsExiting}
               />
            ))}
         </SearchMediaCardsContainer>
      </>
   );
}
