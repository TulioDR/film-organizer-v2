import React from "react";
import LearnMore from "./LearnMore";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";
import { MediaModel } from "@/models/MediaModel";

type Props = {
   mediaType: "tv" | "movie";
   mediaId: number;
   onLearnMoreClick: () => void;
   media: MediaModel;
};

export default function BackFooter({
   mediaType,
   mediaId,
   onLearnMoreClick,
   media,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <div className="flex gap-2 h-12 w-full">
         <div
            style={{ backgroundColor: themeColor }}
            className="h-full aspect-square flex items-center justify-center rounded-md"
         >
            <BookmarkButton type={mediaType} media={media} />
         </div>
         <LearnMore
            mediaType={mediaType}
            mediaId={mediaId}
            onClick={onLearnMoreClick}
         />
      </div>
   );
}
