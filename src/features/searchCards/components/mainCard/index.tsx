import { useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import MainCardFront from "./MainCardFront";
import MainCardBack from "./MainCardBack";
import MainCardContainer from "./MainCardContainer";
import useBackground from "@/hooks/useBackground";

type Props = {
   media: MediaModel;
   mediaType: "tv" | "movie";
};

export default function MainCard({ media, mediaType }: Props) {
   const { changeBackground, removeBackground } = useBackground();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const openCard = () => {
      changeBackground(media);
      setIsOpen(true);
   };
   const closeCard = () => {
      setIsOpen(false);
      removeBackground();
   };

   const [isLeaving, setIsLeaving] = useState<boolean>(false);
   const leave = () => setIsLeaving(true);

   return (
      <MainCardContainer
         id={`${mediaType}-${media.id}`}
         onFocus={openCard}
         onBlur={closeCard}
         isOpen={isOpen}
      >
         <MainCardFront
            isLeaving={isLeaving}
            title={media.title || media.name}
            posterPath={media.poster_path}
         />
         <MainCardBack
            mediaType={mediaType}
            media={media}
            closeCard={closeCard}
            leave={leave}
         />
      </MainCardContainer>
   );
}
