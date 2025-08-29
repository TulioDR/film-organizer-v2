import React from "react";
import Overview from "./Overview";
import Title from "./Title";
import LearnMore from "./LearnMore";
import Bookmark from "@/features/bookmark/components/Bookmark";
import { Media } from "@/common/models/Media";
import BackHeader from "./BackHeader";

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
      <div className="bg-white p-2 rounded-sm absolute flex flex-col w-full h-full top-0 left-0 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-xl">
         <BackHeader media={media} currentMedia={currentMedia} />
         <div className="w-full flex flex-col gap-2 flex-1 p-2 pt-4 overflow-hidden">
            <div className="overflow-hidden flex flex-col gap-2 flex-1 relative">
               <Title title={title} year={releaseDate} />
               <Overview overview={overview} />
            </div>
            <div className="flex gap-2 h-12 w-full">
               <div className="bg-blue-500 h-full aspect-square rounded-md overflow-hidden">
                  <Bookmark media={media} type={mediaType} />
               </div>
               <LearnMore onClick={onLearnMore} />
            </div>
         </div>
      </div>
   );
}
