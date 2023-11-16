import MainTitle from "./MainTitle";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";
import MainDetailsBookmark from "./MainDetailsBookmark";

import RevealHorizontal from "@/animations/RevealHorizontal";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import MainInfoContainer from "./MainInfoContainer";
import { MediaTypeModel } from "@/models/MediaTypeModel";
import { separateArray } from "../../utils/separateFunctions";

type Props = {
   media: MediaDetailsModel;
   mediaType: MediaTypeModel;
};

export default function MainInfo({ media, mediaType }: Props) {
   return (
      <MainInfoContainer>
         <RevealHorizontal stagger>
            <MainTitle>{media.title || media.name}</MainTitle>
         </RevealHorizontal>
         <RevealHorizontal stagger>
            <div className="flex items-end gap-2">
               <Date date={media.first_air_date || media.release_date} />
               <span className="text-xl">○</span>
               <Rating
                  rating={
                     media.release_dates?.results ||
                     media.content_ratings?.results
                  }
                  isMovie={mediaType === "movie"}
               />
            </div>
         </RevealHorizontal>
         <RevealHorizontal stagger>
            <div className="flex items-center gap-2 text-sm ">
               {mediaType == "movie" && (
                  <>
                     <Runtime runtime={media.runtime} />
                     <span className="text-xl">○</span>
                  </>
               )}
               <span>{separateArray(media.genres)}</span>
            </div>
         </RevealHorizontal>
         <div className="flex items-center gap-5">
            <RevealHorizontal stagger>
               <Score score={media.vote_average} />
            </RevealHorizontal>
            <MainDetailsBookmark media={media} mediaType={mediaType} />
         </div>
      </MainInfoContainer>
   );
}
