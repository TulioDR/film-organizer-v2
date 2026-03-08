import React from "react";
import SwipeButton from "./SwipeButton";
import LearnButton from "./LearnButton";
import { AnimatePresence } from "framer-motion";
import HomePoster from "./HomePoster";
import { Media } from "@/common/models/Media";
import MediaGroup from "../../models/MediaGroup";

type Props = {
   frontPath: string;
   isForward: boolean;
   changeSelectedMedia: (media: Media) => void;
   media: Media;
   mediaGroup: MediaGroup;
};

export default function HomeMediaHandler({
   frontPath,
   isForward,
   changeSelectedMedia,
   media,
   mediaGroup,
}: Props) {
   const goPrev = () => {
      const index = mediaGroup.media.findIndex((m) => m.id === media.id);
      if (index === 0) {
         changeSelectedMedia(mediaGroup.media[mediaGroup.media.length - 1]);
      } else {
         changeSelectedMedia(mediaGroup.media[index - 1]);
      }
   };
   const goNext = () => {
      const index = mediaGroup.media.findIndex((m) => m.id === media.id);
      if (index >= mediaGroup.media.length - 1) {
         changeSelectedMedia(mediaGroup.media[0]);
      } else {
         changeSelectedMedia(mediaGroup.media[index + 1]);
      }
   };

   return (
      <div className="w-64 2xl:w-96 relative flex flex-col gap-4 items-center ">
         <div className="h-16 flex gap-4 2xl:absolute top-0 right-full 2xl:translate-x-10 z-10">
            <SwipeButton icon="chevron_backward" onClick={goPrev} />
            <SwipeButton icon="chevron_forward" onClick={goNext} />
         </div>
         <div className="w-full aspect-square relative">
            <LearnButton />
            <div className="aspect-[2/3] w-2/5 rounded-xl border border-border-light dark:border-border-dark -translate-x-6 2xl:-translate-x-10 overflow-hidden absolute top-1/2 left-0 -translate-y-1/2">
               <AnimatePresence initial={false}>
                  <HomePoster
                     key={frontPath}
                     frontPath={frontPath}
                     isForward={isForward}
                  />
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
}
