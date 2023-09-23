import { useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";

import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import useBookmark from "@/hooks/useBookmark";
import useBackground from "@/hooks/useBackground";
import MainCardFront from "./MainCardFront";
import MainCardBack from "./MainCardBack";
import MainCardContainer from "./MainCardContainer";

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

   return (
      <MainCardContainer
         id={`${mediaType}-${media.id}`}
         onFocus={openCard}
         onBlur={closeCard}
         isOpen={isOpen}
      >
         <MainCardFront
            title={media.title || media.name}
            posterPath={media.poster_path}
         />
         <MainCardBack media={media} closeCard={closeCard} />
      </MainCardContainer>
   );
}
