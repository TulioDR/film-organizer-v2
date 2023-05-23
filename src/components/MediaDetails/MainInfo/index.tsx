import React from "react";
import MainTitle from "./MainTitle";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";
import MainBookmark from "../MainBookmark";

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
      <div className="flex-1 overflow-hidden h-full flex flex-col gap-5 justify-center pl-10">
         <MainTitle>{media.title || media.name}</MainTitle>
         <div className="flex items-end gap-2">
            <Date date={media.first_air_date || media.release_date} />
            <span className="text-xl">○</span>
            <Rating
               rating={
                  media.release_dates?.results || media.content_ratings?.results
               }
               isMovie={mediaType === "movie"}
            />
         </div>
         <div className="flex items-center gap-2 text-sm">
            {mediaType == "movie" && (
               <>
                  <Runtime runtime={media.runtime} />
                  <span className="text-xl">○</span>
               </>
            )}
            <span>{separateArray(media.genres)}</span>
         </div>
         <div className="flex items-center gap-5">
            <Score score={media.vote_average} />
            <MainBookmark media={media} mediaType={mediaType} />
         </div>
      </div>
   );
}
