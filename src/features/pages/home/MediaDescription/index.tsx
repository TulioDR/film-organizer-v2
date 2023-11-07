import HomeTitle from "./HomeTitle";
import LearnMoreButton from "./LearnMoreButton";
import { AnimatePresence, motion } from "framer-motion";
import { mediaDescription } from "@/animations/homeAnimations";
import HomeDate from "./HomeDate";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";

type Props = {
   currentMedia: any;
   currentShowcase: string;
};

export default function MediaDescription({
   currentMedia,
   currentShowcase,
}: Props) {
   const { startPosterAnimation } = useTransitionPosterContext();

   const isMovie = currentShowcase !== "series";
   const mediaType = isMovie ? "movie" : "tv";
   const handleLearnMoreClick = async () => {
      startPosterAnimation(mediaType, currentMedia);
   };
   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={currentMedia.id + currentShowcase}
            variants={mediaDescription}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-2 2xl:space-y-3"
         >
            <HomeDate
               currentMedia={currentMedia}
               currentShowcase={currentShowcase}
            />
            <HomeTitle>{currentMedia.title || currentMedia.name}</HomeTitle>
            <div className="flex items-center h-10 gap-4">
               <BookmarkButton media={currentMedia} mediaType={mediaType} />
               <LearnMoreButton
                  href={`/${mediaType}/${currentMedia.id}`}
                  onClick={handleLearnMoreClick}
               />
            </div>
         </motion.div>
      </AnimatePresence>
   );
}
