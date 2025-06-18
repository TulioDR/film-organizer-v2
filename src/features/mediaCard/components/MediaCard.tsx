import { useEffect, useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useDispatch, useSelector } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import Front from "./Front";
import Back from "./Back";
import Container from "./Container";
import { useAnimate } from "framer-motion";
import StoreModel from "@/models/StoreModel";
import { useRouter } from "next/router";

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
};

export default function MediaCard({
   mediaType,
   media,
   isSelected,
   id,
   setFixedValues,
}: Props) {
   const { removeBackground, changeBackground } = useBackground();
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [scope, animate] = useAnimate();
   const dispatch = useDispatch();
   const router = useRouter();

   const { isHidden } = useSelector((state: StoreModel) => state.layout);

   const OPACITY_DURATION = 0.2;
   const ROTATE_DURATION = 0.4;

   useEffect(() => {
      if (isHidden && !isHovered) {
         animate(scope.current, { opacity: 0 }, { duration: OPACITY_DURATION });
      } else {
         animate(scope.current, { opacity: 1 }, { duration: OPACITY_DURATION });
      }
   }, [isHidden, isHovered, OPACITY_DURATION]);

   const onHoverStart = async () => {
      setIsHovered(true);
      animate(".rotate-card", { rotateY: 180 }, { duration: ROTATE_DURATION });
      await animate(".loader-animation", { width: "100%" }, { duration: 2 });
      changeBackground(media.id, media.backdrop_path);
      dispatch(layoutActions.hideLayout());
   };
   const onHoverEnd = async () => {
      setIsHovered(false);
      animate(".loader-animation", { width: "0%" }, { duration: 1 });
      removeBackground();
      dispatch(layoutActions.revealLayout());
      await animate(
         ".rotate-card",
         { rotateY: 360 },
         { duration: ROTATE_DURATION }
      );
      animate(".rotate-card", { rotateY: 0 }, { duration: 0 });
   };

   const onLearnMore = async () => {
      const minHeight = document.getElementById(id)!.clientHeight;
      const containerID = `SELECTED-MEDIA-CONTAINER`;
      const maxHeight = document.getElementById(containerID)!.clientHeight;
      const scale = maxHeight / minHeight;

      setFixedValues({
         minHeight: minHeight,
         scale: scale,
         selectedMedia: media,
      });

      const link = `/${mediaType}/${media.id}`;
      router.push(link, undefined, { scroll: false });
   };

   return (
      <Container
         id={id}
         scope={scope}
         isSelected={isSelected}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
      >
         <Front media={media} />
         <Back media={media} mediaType={mediaType} onLearnMore={onLearnMore} />
      </Container>
   );
}
