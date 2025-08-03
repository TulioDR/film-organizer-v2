import HomeTitle from "./HomeTitle";
import LearnMoreButton from "./LearnMoreButton";
import { AnimatePresence, motion } from "framer-motion";
import { mediaDescription } from "@/animations/homeAnimations";
import HomeDate from "./HomeDate";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";
import { MediaModel } from "@/models/MediaModel";

type Props = {
   currentMedia: MediaModel;
   currentShowcase: string;
};

export default function MediaDescription({
   currentMedia,
   currentShowcase,
}: Props) {
   const isMovie = currentShowcase !== "series";
   const mediaType = isMovie ? "movie" : "tv";
   const handleLearnMoreClick = async () => {};
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
               <BookmarkButton media={currentMedia} type={mediaType} big />
               <LearnMoreButton
                  href={`/${mediaType}/${currentMedia.id}`}
                  onClick={handleLearnMoreClick}
               />
            </div>
         </motion.div>
      </AnimatePresence>
   );
}
