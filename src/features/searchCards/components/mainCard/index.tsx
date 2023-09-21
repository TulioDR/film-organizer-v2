import { AnimatePresence, motion } from "framer-motion";
import Poster from "../../../../components/Poster";
import { useState } from "react";
import CardBack from "./CardBack";
import BackButton from "./BackButton";
import LearnMore from "./LearnMore";
import MainCardBookmark from "./MainCardBookmark";
import BackInfo from "./BackInfo";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";
import useBookmark from "@/hooks/useBookmark";
import { MediaModel } from "@/models/MediaModel";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import useBackground from "@/hooks/useBackground";

type Props = {
   media: MediaModel;
   mediaType: "tv" | "movie";
};

export default function MainCard({ media, mediaType }: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen((prev) => !prev);

   const [isLeaving, setIsLeaving] = useState<boolean>(false);

   const { changeBackground } = useBackground();
   const onLearnMoreClick = () => {
      setIsLeaving(true);
      setIsOpen(false);
      changeBackground(media);
   };

   const { startPosterAnimation } = useTransitionPosterContext();

   const onExitComplete = () => {
      if (!isLeaving) return;
      startPosterAnimation(mediaType, media);
   };

   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   const { handleBookmarkClick } = useBookmark(media, mediaType);

   const cards = {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
         opacity: 1,
         scale: 1,
         transition: { duration: 0.8 },
      },
      exit: {},
   };

   return (
      <motion.article
         layout
         variants={cards}
         className="relative rounded-xl overflow-hidden origin-bottom"
      >
         <div
            id={`${mediaType}-${media.id}`}
            onClick={toggle}
            className="cursor-pointer rounded-xl overflow-hidden"
         >
            <Poster
               alt={media.title || media.name}
               posterPath={media.poster_path}
               size="lg"
            />
         </div>
         <AnimatePresence onExitComplete={onExitComplete}>
            {isOpen && (
               <CardBack>
                  <BackButton onClick={toggle} />
                  <Poster
                     alt={media.title || media.name}
                     posterPath={media.backdrop_path}
                     size="lg"
                     backPoster
                  />
                  <div className="bg-secondary-light dark:bg-secondary-dark rounded-t-xl w-full flex-1 flex flex-col -mt-5 z-10 p-4 overflow-hidden">
                     <BackInfo
                        title={media.title || media.name}
                        voteAverage={media.vote_average}
                        year={media.release_date || media.first_air_date}
                        overview={media.overview || "N/A"}
                     />
                     <div className="flex justify-between items-center h-9 w-full">
                        <LearnMore onClick={onLearnMoreClick} />
                        <MainCardBookmark
                           onClick={handleBookmarkClick}
                           isMediaSaved={isMediaSaved}
                        />
                     </div>
                  </div>
               </CardBack>
            )}
         </AnimatePresence>
      </motion.article>
   );
}
