import { useEffect } from "react";
import { MediaModel } from "@/models/MediaModel";
import { useSelector } from "react-redux";
import Front from "./Front";
import Back from "./Back";
import Container from "./Container";
import { animate } from "framer-motion";
import StoreModel from "@/models/StoreModel";
import useLearnMore from "../hooks/useLearnMore";
import useCardHover from "../hooks/useCardHover";
import { OPACITY_DURATION } from "../constants/ANIMATIONS_DURATIONS";

interface FixedValues {
   minHeight: number;
   scale: number;
   selectedMedia: MediaModel;
}
type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
   isSelected: boolean;
   id: string;
   setFixedValues: React.Dispatch<React.SetStateAction<FixedValues | null>>;
   currentMedia?: MediaModel;
};

export default function MediaCard({
   mediaType,
   media,
   isSelected,
   id,
   currentMedia,
   setFixedValues,
}: Props) {
   const { isHidden } = useSelector((state: StoreModel) => state.layout);

   const { isHovered, scope, onHoverStart, onHoverEnd } = useCardHover(
      media,
      currentMedia
   );
   const { onLearnMore } = useLearnMore(id, mediaType, media, setFixedValues);

   useEffect(() => {
      if (isHidden && !isHovered) {
         animate(scope.current, { opacity: 0 }, { duration: OPACITY_DURATION });
      } else {
         animate(scope.current, { opacity: 1 }, { duration: OPACITY_DURATION });
      }
   }, [isHidden, isHovered, OPACITY_DURATION]);

   return (
      <Container
         id={id}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         isSelected={isSelected}
         scope={scope}
      >
         <Front media={media} />
         <Back media={media} mediaType={mediaType} onLearnMore={onLearnMore} />
      </Container>
   );
}
