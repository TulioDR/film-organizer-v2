import { MediaDetailsModel } from "../../../models/MediaDetailsModel";
import InfoContainer from "../InfoContainer";
import React from "react";
import {
   LG_MEDIA_QUERY,
   SM_MEDIA_QUERY,
   XXL_MEDIA_QUERY,
} from "@/common/constants/MEDIA_QUERIES";
import ResponsiveConfig from "../../../models/ResponsiveConfig";
import Responsive from "@/common/components/Responsive";
import MediaCard from "@/features/media-card/components/MediaCard";

type Props = {
   media: MediaDetailsModel;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   const similarMedia = media.similar.results;
   const currentMedia = media;
   const subtitleText = `Similar ${
      mediaType === "movie" ? "Movies" : "Series"
   }`;

   const responsiveConfigs: ResponsiveConfig[] = [
      { minWidth: XXL_MEDIA_QUERY, itemsPerPage: 5 },
      { minWidth: LG_MEDIA_QUERY, maxWidth: XXL_MEDIA_QUERY, itemsPerPage: 4 },
      { minWidth: SM_MEDIA_QUERY, maxWidth: LG_MEDIA_QUERY, itemsPerPage: 3 },
      { maxWidth: SM_MEDIA_QUERY, itemsPerPage: 2 },
   ];

   const renderMediaCardItem = (similarItem: any) => (
      <MediaCard
         mediaType={mediaType}
         media={similarItem}
         isSelected={false} // This seems constant, ensure it's intended
         id={similarItem.id.toString()}
         setFixedValues={() => {}} // This seems constant, ensure it's intended
         currentMedia={currentMedia}
      />
   );

   return (
      <>
         {responsiveConfigs.map((config, index) => (
            <Responsive key={index} {...config}>
               <InfoContainer
                  itemsPerPage={config.itemsPerPage}
                  subtitle={subtitleText}
                  media={similarMedia}
                  similar
                  className="xl:col-span-2"
                  renderItem={renderMediaCardItem} // Use the pre-defined render function
               />
            </Responsive>
         ))}
      </>
   );
}
