import React from "react";
import MainInfoMobileContainer from "./MainInfoMobileContainer";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import MainTitle from "../MainInfo/MainTitle";
import Date from "../MainInfo/Date";
import Rating from "../MainInfo/Rating";
import { MediaTypeModel } from "@/models/MediaTypeModel";
import Runtime from "../MainInfo/Runtime";
import { separateArray } from "../../utils/separateFunctions";
import Score from "../MainInfo/Score";
import MainDetailsBookmark from "../MainInfo/MainDetailsBookmark";

type Props = {
   media: MediaDetailsModel;
   mediaType: MediaTypeModel;
};

export default function MainInfoMobile({ media, mediaType }: Props) {
   return (
      <MainInfoMobileContainer>
         <MainTitle>{media.title || media.name}</MainTitle>
         <div className="flex items-end gap-2">
            <Date date={media.first_air_date || media.release_date} />
            <span className="text-sm">○</span>
            <Rating
               rating={
                  media.release_dates?.results || media.content_ratings?.results
               }
               isMovie={mediaType === "movie"}
            />
         </div>
         <div className="flex items-center gap-2 text-xs">
            {mediaType == "movie" && (
               <>
                  <Runtime runtime={media.runtime} />
                  <span className="text-xl">○</span>
               </>
            )}
            <span>{separateArray(media.genres)}</span>
         </div>
         <div className="flex items-center gap-3">
            <Score score={media.vote_average} />
            <MainDetailsBookmark media={media} mediaType={mediaType} />
         </div>
      </MainInfoMobileContainer>
   );
}
