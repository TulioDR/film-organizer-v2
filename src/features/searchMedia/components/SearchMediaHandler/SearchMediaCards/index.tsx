import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { MediaModel } from "@/models/MediaModel";

import MediaCard from "@/features/mediaCard/components/MediaCard";

type Props = {
   media: MediaModel[];
   type: "movie" | "tv";
};

export default function SearchMediaCards({ media, type }: Props) {
   return (
      <SearchMediaCardsContainer>
         {media!.map((media) => (
            <MediaCard key={media.id} media={media} mediaType={type} />
         ))}
      </SearchMediaCardsContainer>
   );
}
