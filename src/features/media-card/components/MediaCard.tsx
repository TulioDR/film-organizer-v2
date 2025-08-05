import { useEffect } from "react";
import { useSelector } from "react-redux";
import Front from "./Front";
import Back from "./Back";
import Container from "./Container";
import { animate } from "framer-motion";
import useLearnMore from "../hooks/useLearnMore";
import useCardHover from "../hooks/useCardHover";
import { OPACITY_DURATION } from "../constants/ANIMATIONS_DURATIONS";
import Store from "@/common/models/Store";
import { Media } from "@/common/models/Media";

interface FixedValues {
   minHeight: number;
   scale: number;
   selectedMedia: Media;
}
type Props = {
   mediaType: "tv" | "movie";
   media: Media;
   isSelected: boolean;
   id: string;
   setFixedValues: React.Dispatch<React.SetStateAction<FixedValues | null>>;
   currentMedia?: Media;
};

export default function MediaCard({
   mediaType,
   media,
   isSelected,
   id,
   currentMedia,
   setFixedValues,
}: Props) {
   const { isHidden } = useSelector((state: Store) => state.layout);

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
