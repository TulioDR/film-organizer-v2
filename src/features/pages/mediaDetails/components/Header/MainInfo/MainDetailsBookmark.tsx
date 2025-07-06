import GlassContainer from "@/components/GlassContainer";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PortalContainer from "./PortalContainer";
type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainDetailsBookmark({ mediaType, media }: Props) {
   const buttonRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(buttonRef, {
      initial: true,
      amount: "all",
      margin: "-128px 0px 0px 0px",
   });

   const transition = {
      layout: { duration: 0.3 },
   };

   return (
      <>
         <div ref={buttonRef} className="w-10 sm:w-16 aspect-square">
            {isInView && (
               <motion.div
                  layoutId="details-bookmark"
                  transition={transition}
                  className="w-full h-full relative z-20"
               >
                  <GlassContainer className="hover:bg-white hover:text-black h-full">
                     <BookmarkButton
                        useLoading
                        media={media}
                        type={mediaType}
                        big
                     />
                  </GlassContainer>
               </motion.div>
            )}
            <PortalContainer>
               <div className="fixed top-1/2 -translate-y-1/2 right-8 w-16 aspect-square">
                  {!isInView && (
                     <motion.div
                        layoutId="details-bookmark"
                        transition={transition}
                        className="w-full h-full"
                     >
                        <GlassContainer className="hover:bg-white hover:text-black z-10 h-full">
                           <BookmarkButton
                              useLoading
                              media={media}
                              type={mediaType}
                              big
                           />
                        </GlassContainer>
                     </motion.div>
                  )}
               </div>
            </PortalContainer>
         </div>
      </>
   );
}
