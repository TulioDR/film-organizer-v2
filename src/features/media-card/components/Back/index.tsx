import React from "react";
import Overview from "./Overview";
import Title from "./Title";
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
      <div className="rounded-sm absolute w-full h-full top-0 left-0 [transform:rotateY(180deg)] border-border-width border-border-light dark:border-border-dark [backface-visibility:hidden] overflow-hidden shadow-xl">
         <div className="w-full h-full flex flex-col bg-white dark:bg-black p-2 overflow-hidden">
            <Responsive minWidth={SM_MEDIA_QUERY}>
               <BackHeader media={media} currentMedia={currentMedia} />
            </Responsive>
            <div className="w-full flex flex-col gap-2 flex-1 p-0 sm:p-2 pt-2 sm:pt-4 overflow-hidden">
               <div className="overflow-hidden flex flex-col gap-2 flex-1 relative">
                  <Title title={title} year={releaseDate} />
                  <Overview overview={overview} />
               </div>
               <div className="flex gap-2 h-12 w-full">
                  <div className="bg-[#CBAB60] h-full aspect-square rounded-md overflow-hidden">
                     <Bookmark media={media} type={mediaType} />
                  </div>
                  <LearnMore onClick={onLearnMore} />
               </div>
            </div>
         </div>
      </div>
   );
}
