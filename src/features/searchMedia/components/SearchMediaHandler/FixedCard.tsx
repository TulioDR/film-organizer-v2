import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { MediaModel } from "@/models/MediaModel";
import Front from "@/features/mediaCard/components/Front";
import Back from "@/features/mediaCard/components/Back";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { selectedMediaActions } from "@/store/slices/selected-media-slice";

type Props = {
   selectedMedia: MediaModel;
   fixedHeight: number;
   mediaType: "tv" | "movie";
};

export default function FixedCard({
   selectedMedia,
   fixedHeight,
   mediaType,
}: Props) {
   const selectedID = `${mediaType}-${selectedMedia?.id}`;

   const loaderControls = useAnimationControls();

   const router = useRouter();
   useEffect(() => {
      const animate = async () => {
         // console.log("you should push now");
         router.push(`/${mediaType}/${selectedMedia.id}`, undefined, {
            scroll: false,
         });
      };
      animate();
   }, [fixedHeight]);

   // const lenis = useLenis();

   // useEffect(() => {
   //    if (!lenis) return;
   //    lenis.stop();
   //    console.log("lenis stop");
   //    return () => {
   //       lenis.start();
   //       console.log("lenis start");
   //    };
   // }, [lenis]);

   const maxHeight = window.innerHeight - 256;
   const s = maxHeight / fixedHeight;
   const DURATION = 0.4;

   const { isFixed } = useSelector((state: StoreModel) => state.selectedMedia);

   const dispatch = useDispatch();
   const handleClose = () => {
      dispatch(selectedMediaActions.resetSelectedMedia());
   };

   return (
      <motion.div
         layout
         layoutRoot
         // onClick={handleClose}
         className={`top-0 left-0 p-32 h-[100svh] z-10 pointer-events-none ${
            isFixed ? "fixed" : "absolute"
         }`}
      >
         <div className="aspect-[2/3] h-full flex items-center justify-center">
            <motion.div
               layoutId={selectedID}
               style={{ scale: s, height: fixedHeight }}
               transition={{ duration: DURATION }}
               className="aspect-[2/3] [perspective:2000px]"
            >
               <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: DURATION }}
                  className="relative [transform-style:preserve-3d] w-full h-full"
               >
                  <Front media={selectedMedia} />
                  <Back
                     loaderControls={loaderControls}
                     media={selectedMedia}
                     mediaType={mediaType}
                     onLearnMore={() => {}}
                  />
               </motion.div>
            </motion.div>
         </div>
      </motion.div>
   );
}
