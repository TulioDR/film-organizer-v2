import { useRef, useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useDispatch } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import Front from "./Front";
import Back from "./Back";
import Container from "./Container";
import { useRouter } from "next/router";
import { useAnimationControls } from "framer-motion";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
   selectedId: number | null;
   setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function MediaCard({
   mediaType,
   media,
   selectedId,
   setSelectedId,
}: Props) {
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

   const containerRef = useRef<HTMLDivElement>(null);
   const [exitStyle, setExitStyle] = useState<React.CSSProperties>({});
   const scaleControls = useAnimationControls();

   const router = useRouter();
   const onLearnMore = async () => {
      setSelectedId(media.id);
      const { height } = containerRef.current!.getBoundingClientRect();
      const exitScale = (window.innerHeight - 256) / height;
      setExitStyle({
         height: height,
         position: "fixed",
         top: 128,
         left: 128,
         zIndex: 50,
      });
      await scaleControls.start({ scale: exitScale });
      router.push(`/${mediaType}/${media.id}`);
   };

   return (
      <Container
         id={ID}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         isHovered={isHovered}
         cardRef={containerRef}
         scaleControls={scaleControls}
         exitStyle={exitStyle}
         hideCardContainer={!!selectedId && selectedId !== media.id}
      >
         <Front media={media} />
         <Back
            media={media}
            mediaType={mediaType}
            isHovered={isHovered}
            onLearnMore={onLearnMore}
         />
      </Container>
   );
}
