import MainTitle from "./MainTitle";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";

import { MediaDetailsModel } from "../../../models/MediaDetailsModel";
import { MediaTypeModel } from "@/models/MediaTypeModel";
import { motion } from "framer-motion";
import MainBookmark from "./MainBookmark";
import { containerVariant } from "@/animations/revealVariants";

type Props = {
   media: MediaDetailsModel;
   mediaType: MediaTypeModel;
};

export default function HeaderData({ media, mediaType }: Props) {
   const TITLE = media.title || media.name;
   const DATE = media.first_air_date || media.release_date;
   const RATING =
      media.release_dates?.results || media.content_ratings?.results;
   const RUNTIME = media.runtime;
   const SCORE = media.vote_average;

   return (
      <motion.div
         variants={containerVariant}
         initial="initial"
         animate="animate"
         exit="exit"
         className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-2 xl:gap-4 text-white"
      >
         <MainTitle>{TITLE}</MainTitle>
         <div className="flex gap-2 xl:gap-4 h-10 text-xs md:text-sm xl:text-lg font-bold">
            <Date date={DATE} />
            <Rating rating={RATING} isMovie={mediaType === "movie"} />
            {mediaType == "movie" && <Runtime runtime={RUNTIME} />}
         </div>
         <div className="flex gap-2 xl:gap-4 h-16">
            <Score score={SCORE} />
            <MainBookmark media={media} mediaType={mediaType} />
         </div>
      </motion.div>
   );
}
