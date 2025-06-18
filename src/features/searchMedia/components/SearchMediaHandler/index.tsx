import MediaCard from "@/features/mediaCard/components/MediaCard";
import useSearchMedia from "../../hooks/useSearchMedia";

import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { useRouter } from "next/router";

import FixedCard from "./FixedCard";
import { useState } from "react";
import { MediaModel } from "@/models/MediaModel";

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

   interface FixedValues {
      minHeight: number;
      scale: number;
      selectedMedia: MediaModel;
   }

   const [fixedValues, setFixedValues] = useState<FixedValues | null>(null);
   const selectedID = `${mediaType}-${fixedValues?.selectedMedia?.id}`;

   return (
      <>
         <SearchMediaCardsContainer isExiting={!!fixedValues}>
            {media!.map((media) => (
               <MediaCard
                  key={`${mediaType}-${media.id}`}
                  media={media}
                  mediaType={mediaType}
                  id={`${mediaType}-${media.id}`}
                  isSelected={selectedID === `${mediaType}-${media.id}`}
                  setFixedValues={setFixedValues}
               />
            ))}
         </SearchMediaCardsContainer>
         <FixedCard fixedValues={fixedValues} setFixedValues={setFixedValues} />
      </>
   );
}
