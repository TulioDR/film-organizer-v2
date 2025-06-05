import { useEffect, useRef, useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useDispatch, useSelector } from "react-redux";
import { layoutActions } from "@/store/slices/layout-slice";
import Front from "./Front";
import Back from "./Back";
import Container from "./Container";
import { useRouter } from "next/router";
import { useAnimationControls } from "framer-motion";
import StoreModel from "@/models/StoreModel";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
   isExiting: boolean;
   setIsExiting: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MediaCard({
   mediaType,
   media,
   isExiting,
   setIsExiting,
}: Props) {
   const { removeBackground, changeBackground } = useBackground();
   const dispatch = useDispatch();

   const router = useRouter();
   const ID = `${mediaType}-${media.id}`;
   const containerRef = useRef<HTMLDivElement>(null);

   const [isSelected, setIsSelected] = useState(false);
   const [isHovered, setIsHovered] = useState<boolean>(false);
   const [exitStyle, setExitStyle] = useState<React.CSSProperties>({});

   const containerControls = useAnimationControls();
   const rotateControls = useAnimationControls();
   const scaleControls = useAnimationControls();
   const loaderControls = useAnimationControls();

   const { isHidden } = useSelector((state: StoreModel) => state.layout);

   const onHoverStart = async () => {
      const transition = { duration: 0.4 };
      setIsHovered(true);
      rotateControls.start({ rotateY: 180, transition });
      await loaderControls.start({
         width: "100%",
         transition: { duration: 2 },
      });
      changeBackground(media.id, media.backdrop_path);
      dispatch(layoutActions.hideLayout());
   };
   const onHoverEnd = () => {
      const transition = { duration: 0.4 };
      setIsHovered(false);
      rotateControls.start({ rotateY: 360, transition });
      loaderControls.start({
         width: "0%",
         transition: { duration: 0.4 },
      });
      removeBackground();
      dispatch(layoutActions.revealLayout());
   };

   const onCardMotionUpdate = (e: any) => {
      const transition = { duration: 0 };
      if (e.rotateY === 360) rotateControls.set({ rotateY: 0, transition });
   };

   const onLearnMore = async () => {
      setIsExiting(true);
      setIsSelected(true);
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

   useEffect(() => {
      if (isExiting && !isSelected) {
         containerControls.start({ opacity: 0 });
      }
   }, [isExiting, isSelected]);

   useEffect(() => {
      if (isHidden && !isHovered) {
         containerControls.start({ opacity: 0 });
         return;
      } else {
         if (isExiting) return;
         containerControls.start({ opacity: 1 });
      }
   }, [isHidden, isHovered, containerControls, isExiting]);

   return (
      <Container
         id={ID}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         cardRef={containerRef}
         scaleControls={scaleControls}
         exitStyle={exitStyle}
         handleUpdate={onCardMotionUpdate}
         rotateControls={rotateControls}
         containerControls={containerControls}
         isSelected={isSelected}
      >
         <Front media={media} />
         <Back
            loaderControls={loaderControls}
            media={media}
            mediaType={mediaType}
            onLearnMore={onLearnMore}
         />
      </Container>
   );
}
