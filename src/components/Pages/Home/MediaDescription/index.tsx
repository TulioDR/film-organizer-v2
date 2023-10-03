import HomeTitle from "./HomeTitle";
import LearnMoreButton from "./LearnMoreButton";
import HomeBookmark from "./HomeBookmark";
import { AnimatePresence, motion } from "framer-motion";
import { mediaDescription } from "@/animations/homeAnimations";
import HomeDate from "./HomeDate";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";

type Props = {
   currentMedia: any;
   currentShowcase: string;
};

export default function MediaDescription({
   currentMedia,
   currentShowcase,
}: Props) {
   const { startPosterAnimation } = useTransitionPosterContext();
   const handleLearnMoreClick = async () => {
      const isMovie = currentShowcase !== "series";
      const mediaType = isMovie ? "movie" : "tv";
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
               <HomeBookmark movie={currentMedia} />
               <LearnMoreButton onClick={handleLearnMoreClick} />
            </div>
         </motion.div>
      </AnimatePresence>
   );
}
