import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import InfoContainer from "../InfoContainer";
import React from "react";
import MediaCard from "@/features/mediaCard/components/MediaCard";

type Props = {
   media: MediaDetailsModel;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   const similarMedia = media.similar.results;
   const currentMedia = media;

   return (
      <InfoContainer
         itemsPerPage={5}
         numberOfRows={1}
         columnLength={2}
         subtitle={`Similar ${mediaType === "movie" ? "Movies" : "Series"}`}
         media={similarMedia}
         similar
         renderItem={(similar) => (
            <MediaCard
               mediaType={mediaType}
               media={similar}
               isSelected={false}
               id={similar.id.toString()}
               setFixedValues={() => {}}
               currentMedia={currentMedia}
            />
         )}
      />
   );
}
