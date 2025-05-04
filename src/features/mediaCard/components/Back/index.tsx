import React from "react";
import { MediaModel } from "@/models/MediaModel";
import Container from "./Container";
import Poster from "@/components/Poster";
import Loader from "./Loader";
import Overview from "./Overview";
import Title from "./Title";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";
import LearnMore from "./LearnMore";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";

type Props = {
   media: MediaModel;
   mediaType: "movie" | "tv";
   isHovered: boolean;
};

export default function Back({ media, mediaType, isHovered }: Props) {
   const title = media.name || media.title;
   const mediaId = media.id;
   const backdrop = media.backdrop_path;
   const releaseDate = media.release_date || media.first_air_date;
   const overview = media.overview || "N/A";
   const href = `/${mediaType}/${mediaId}`;

   const { startPosterAnimation } = useTransitionPosterContext();
   const learnMore = () => {
      setTimeout(() => {
         startPosterAnimation(mediaType, mediaId, media.poster_path);
      }, 500);
   };

   return (
      <Container>
         <div className="relative">
            <Poster alt={title} posterPath={backdrop} size="lg" backPoster />
            <Loader isHovered={isHovered} media={media} />
         </div>
         <div className="w-full flex flex-col gap-2 flex-1 p-4 pt-6 overflow-hidden">
            <div className="overflow-hidden flex flex-col gap-2 flex-1 relative">
               <Title title={title} year={releaseDate} />
               <Overview overview={overview} />
            </div>
            <div className="flex gap-2 h-12 w-full">
               <BookmarkButton type={mediaType} media={media} />
               <LearnMore href={href} onClick={learnMore} />
            </div>
         </div>
      </Container>
   );
}
