import React from "react";
import MediaCardBackTitle from "../MediaCardBackTitle";
import { MediaModel } from "@/models/MediaModel";
import MainCardDate from "../MainCardDate";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";
import BackButtonMobile from "./BackButtonMobile";
import LearnMoreMobile from "./LearnMoreMobile";

type Props = {
   media: MediaModel;
   mediaType: "tv" | "movie";
   closeCard: () => void;
   closeWithoutRemove: () => void;
};

export default function MainCardBackMobile({
   media,
   mediaType,
   closeCard,
   closeWithoutRemove,
}: Props) {
   return (
      <div className="sm:hidden absolute p-3 top-0 left-0 w-full h-full flex flex-col bg-secondary-light dark:bg-secondary-dark [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden rounded-3xl">
         <div className="flex justify-between">
            <BackButtonMobile onClick={closeCard} />
            <div className="rounded-full overflow-hidden">
               <BookmarkButton mediaType={mediaType} media={media} />
            </div>
         </div>
         <div className="flex flex-col flex-1 pt-3 overflow-hidden relative">
            <div className="space-y-3 ">
               <MainCardDate
                  date={media.release_date || media.first_air_date}
               />
               <MediaCardBackTitle>
                  {media.title || media.name}
               </MediaCardBackTitle>
            </div>
            <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-secondary-light dark:from-secondary-dark to-transparent" />
         </div>
         <LearnMoreMobile
            mediaType={mediaType}
            media={media}
            closeCard={closeWithoutRemove}
         />
      </div>
   );
}
