import React from "react";
import Overview from "./Overview";
import BackTitle from "./BackTitle";
import LearnMore from "./LearnMore";
import Bookmark from "@/features/bookmark/components/Bookmark";
import { Media } from "@/common/models/Media";
import BackHeader from "./BackHeader";
import Responsive from "@/common/components/Responsive";
import { SM_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";

type Props = {
   media: Media;
   mediaType: "movie" | "tv";
   onLearnMore: () => void;
   currentMedia?: Media;
};

export default function Back({
   media,
   mediaType,
   onLearnMore,
   currentMedia,
}: Props) {
   const title = media.name || media.title;
   const releaseDate = media.release_date || media.first_air_date;
   const overview = media.overview || "N/A";

   return (
      <div className="rounded-lg absolute w-full h-full top-0 left-0 flex flex-col [transform:rotateY(180deg)] bg-primary-light dark:bg-primary-dark border-border-width border-border-light dark:border-border-dark [backface-visibility:hidden] overflow-hidden shadow-xl">
         <Responsive minWidth={SM_MEDIA_QUERY}>
            <BackHeader media={media} currentMedia={currentMedia} />
         </Responsive>
         <BackTitle title={title} year={releaseDate} />

         <div className="w-full p-4">
            <div className="flex gap-2 h-12 w-full">
               <div className="bg-[#CBAB60] h-full aspect-square rounded-md overflow-hidden">
                  <Bookmark media={media} type={mediaType} />
               </div>
               <LearnMore onClick={onLearnMore} />
               <div className="h-full aspect-square rounded-md overflow-hidden bg-amber-600"></div>
            </div>
         </div>
      </div>
   );
}
