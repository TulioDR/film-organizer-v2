import React from "react";
import BackTitle from "./BackTitle";
import LearnMore from "./LearnMore";
import { Media } from "@/common/models/Media";
import BackHeader from "./BackHeader";
import Responsive from "@/common/components/Responsive";
import { SM_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import OverviewButton from "./Overview/OverviewButton";
import CardBookmark from "./CardBookmark";

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
         <div className="flex-1 w-full flex flex-col p-4 overflow-hidden">
            <BackTitle title={title} year={releaseDate} />
            <div className="w-full flex flex-col gap-2">
               <div className="w-full flex gap-2 h-9">
                  <CardBookmark media={media} mediaType={mediaType} />
                  <OverviewButton />
               </div>
               <LearnMore onClick={onLearnMore} />
            </div>
         </div>
      </div>
   );
}
