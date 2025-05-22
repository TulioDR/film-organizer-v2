import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { MediaModel } from "@/models/MediaModel";

import MediaCard from "@/features/mediaCard/components/MediaCard";
import { useState } from "react";

type Props = {
   media: MediaModel[];
   type: "movie" | "tv";
};

export default function SearchMediaCards({ media, type }: Props) {
   const [selectedId, setSelectedId] = useState<number | null>(null);

   return (
      <SearchMediaCardsContainer>
         {media!.map((media) => (
            <MediaCard
               key={media.id}
               media={media}
               mediaType={type}
               selectedId={selectedId}
               setSelectedId={setSelectedId}
            />
         ))}
      </SearchMediaCardsContainer>
   );
}
