import MainTitle from "./MainTitle";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";

import { MediaDetailsModel } from "../../../models/MediaDetailsModel";
import { motion } from "framer-motion";
import MainBookmark from "./MainBookmark";
import { containerVariant } from "@/common/animations/revealVariants";
import { MediaType } from "@/common/models/MediaType";

type Props = {
   media: MediaDetailsModel;
   mediaType: MediaType;
};

export default function HeaderData({ media, mediaType }: Props) {
   const TITLE = media.title || media.name;
   const DATE = media.first_air_date || media.release_date;
   const RATING =
      media.release_dates?.results || media.content_ratings?.results;
   const RUNTIME = media.runtime;
   const SCORE = media.vote_average;
   //400.000.000
   return (
      <motion.div
         variants={containerVariant}
         initial="initial"
         animate="animate"
         exit="exit"
         className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-2 text-white"
      >
         <MainTitle>{TITLE}</MainTitle>
         <div className="flex gap-2 h-8  text-xs md:text-sm font-bold">
            <Date date={DATE} />
            <Rating rating={RATING} isMovie={mediaType === "movie"} />
            {mediaType == "movie" && <Runtime runtime={RUNTIME} />}
         </div>
         <div className="flex h-16 gap-2">
            <Score score={SCORE} />
            <MainBookmark media={media} mediaType={mediaType} />
         </div>
      </motion.div>
   );
}
