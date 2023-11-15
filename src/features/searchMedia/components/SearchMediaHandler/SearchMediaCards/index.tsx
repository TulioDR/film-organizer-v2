import BookmarkButton from "@/features/bookmark/components/BookmarkButton";

import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { MediaModel } from "@/models/MediaModel";

import FrontTitle from "@/features/mediaCard/components/MediaCardFront/FrontTitle";
import MediaCard from "@/features/mediaCard/components/MediaCard";

type Props = {
   media: MediaModel[];
   type: "movie" | "tv";
};

export default function SearchMediaCards({ media, type }: Props) {
   return (
      <SearchMediaCardsContainer>
         {media!.map((media) => (
            <MediaCard
               key={media.id}
               mediaType={type}
               mediaId={media.id}
               poster={media.poster_path}
               backdrop={media.backdrop_path}
               title={media.name || media.title}
               overview={media.overview || "N/A"}
               releaseDate={media.release_date || media.first_air_date}
               cardFront={<FrontTitle title={media.name || media.title} />}
               backButton={<BookmarkButton type={type} media={media} />}
            />
         ))}
      </SearchMediaCardsContainer>
   );
}
