import { useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useDispatch } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import Front from "./Front";
import Back from "./Back";
import Container from "./Container";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
};

export default function MediaCard({ mediaType, media }: Props) {
   const { removeBackground } = useBackground();
   const dispatch = useDispatch();

   const [isHovered, setIsHovered] = useState<boolean>(false);
   const onHoverStart = () => {
      setIsHovered(true);
   };
   const onHoverEnd = () => {
      setIsHovered(false);
      removeBackground();
      dispatch(layoutActions.revealLayout());
   };

   const ID = `${mediaType}-${media.id}`;

   return (
      <Container
         id={ID}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         isHovered={isHovered}
      >
         <Front media={media} />
         <Back media={media} mediaType={mediaType} isHovered={isHovered} />
      </Container>
   );
}
