import React from "react";
import { Media } from "@/common/models/Media";
import Marquee from "./Marquee";

type Props = {
   currentMedia: Media;
   groupMedia: Media[];
   isHovered: boolean;
   changeSelectedMedia: (media: Media) => void;
};

export default function GroupTicker({
   groupMedia,
   isHovered,
   changeSelectedMedia,
   currentMedia,
}: Props) {
   const array1 = groupMedia.slice(0, 7);
   const array2 = groupMedia.slice(7, 14);
   const array3 = groupMedia.slice(14, 20);
   const bigArray = [[...array1], [...array2], [...array3]];
   return (
      <div className="flex gap-1 w-[410px] flex-shrink-0 h-full overflow-hidden">
         {bigArray.map((array, index) => (
            <Marquee
               currentMedia={currentMedia}
               key={index}
               array={array}
               isHovered={isHovered}
               reverse={index % 2 === 0}
               initialY={index + (index % 2 === 0 ? 75 : 25)}
               changeSelectedMedia={changeSelectedMedia}
            />
         ))}
      </div>
   );
}
