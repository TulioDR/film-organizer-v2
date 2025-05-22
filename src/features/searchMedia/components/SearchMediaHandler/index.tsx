import MediaCard from "@/features/mediaCard/components/MediaCard";
import useSearchMedia from "../../hooks/useSearchMedia";

import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { useState } from "react";
import { useRouter } from "next/router";

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
   const [selectedId, setSelectedId] = useState<number | null>(null);

   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";
   return (
      <SearchMediaCardsContainer>
         {media!.map((media) => (
            <MediaCard
               key={media.id}
               media={media}
               mediaType={mediaType}
               selectedId={selectedId}
               setSelectedId={setSelectedId}
            />
         ))}
      </SearchMediaCardsContainer>
   );
}
