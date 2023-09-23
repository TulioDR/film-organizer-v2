import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MediaModel } from "@/models/MediaModel";

import Poster from "@/components/Poster";

import useIsMediaSaved from "@/hooks/useIsMediaSaved";

import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import useBookmark from "@/hooks/useBookmark";
import useBackground from "@/hooks/useBackground";
import MainCardFront from "./MainCardFront";
import MainCardBack from "./MainCardBack";

type Props = {
   media: MediaModel;
   mediaType: "tv" | "movie";
};

export default function MainCard({ media, mediaType }: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const openCard = () => setIsOpen(true);
   const closeCard = () => setIsOpen(false);

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
      // startPosterAnimation(mediaType, media);
      console.log("Exit complete");
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

   const backgroundVariant = {
      hover: { opacity: 1 },
   };
   return (
      <motion.article
         tabIndex={0}
         onFocus={openCard}
         onBlur={closeCard}
         layout
         variants={cards}
         whileHover="hover"
         className="relative rounded-3xl origin-bottom group [perspective:1000px]"
      >
         <div className="group-hover:[transform:rotateY(180deg)] duration-500">
            <div id={`${mediaType}-${media.id}`} className="cursor-pointer ">
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.poster_path}
                  size="lg"
               />
            </div>
            <div className="w-full h-full absolute top-0 left-0">
               {/* <motion.div
               variants={backgroundVariant}
               initial={{ opacity: 1 }}
               animate={{ opacity: isOpen ? 1 : 0 }}
               exit={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               className="w-full h-full bg-black/70"
            /> */}
               <AnimatePresence
                  onExitComplete={onExitComplete}
                  mode="wait"
                  initial={false}
               >
                  {!isOpen ? (
                     <MainCardFront
                        key="front"
                        title={media.title || media.name}
                     />
                  ) : (
                     <MainCardBack
                        key="back"
                        media={media}
                        closeCard={closeCard}
                     />
                  )}
               </AnimatePresence>
            </div>
         </div>
      </motion.article>
   );
}
