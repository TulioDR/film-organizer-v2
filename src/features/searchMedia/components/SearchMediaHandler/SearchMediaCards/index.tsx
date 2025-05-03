import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { MediaModel } from "@/models/MediaModel";

import FrontTitle from "@/features/mediaCard/components/MediaCardFront/FrontTitle";
import MediaCard from "@/features/mediaCard/components/MediaCard";
import { useState } from "react";

type Props = {
   media: MediaModel[];
   type: "movie" | "tv";
};

export default function SearchMediaCards({ media, type }: Props) {
   const [selectedId, setSelectedId] = useState<number | null>(null);
   const [hoveredId, setHoveredId] = useState<number | null>(null);

   return (
      <SearchMediaCardsContainer>
         {media!.map((media) => (
            <MediaCard
               key={media.id}
               media={media}
               mediaType={type}
               cardFront={<FrontTitle title={media.name || media.title} />}
               selectedId={selectedId}
               setSelectedId={setSelectedId}
               hoveredId={hoveredId}
               setHoveredId={setHoveredId}
            />
         ))}
      </SearchMediaCardsContainer>
   );
}
