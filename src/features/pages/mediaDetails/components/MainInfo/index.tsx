import MainTitle from "./MainTitle";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";
import MainDetailsBookmark from "./MainDetailsBookmark";
import { motion } from "framer-motion";

import RevealHorizontal from "@/animations/RevealHorizontal";
import { staggerContainer } from "@/animations/StaggerCards";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
};

export default function MainInfo({ media, mediaType }: Props) {
   const separateByCommas = (array: any[], index: number): string => {
      if (index === array.length - 1) {
         return ".";
      } else return ",";
   };
   const separateArray = (array: any[]): JSX.Element[] => {
      return array.map((item, index) => (
         <span key={item.id} className="mr-2 inline-block">
            {item.name}
            {separateByCommas(array, index)}
         </span>
      ));
   };
   return (
      <div className="flex-1 overflow-hidden h-full md:pl-10">
         <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex flex-col items-end md:items-start gap-5 text-white justify-center overflow-hidden"
         >
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
         </motion.div>
      </div>
   );
}
