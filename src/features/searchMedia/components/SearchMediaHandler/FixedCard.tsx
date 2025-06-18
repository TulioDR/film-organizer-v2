import React from "react";
import { motion } from "framer-motion";
import Front from "@/features/mediaCard/components/Front";
import Back from "@/features/mediaCard/components/Back";
import { MediaModel } from "@/models/MediaModel";

interface FixedValues {
   minHeight: number;
   scale: number;
   selectedMedia: MediaModel;
}

type Props = {
   fixedValues: FixedValues | null;
   setFixedValues: React.Dispatch<React.SetStateAction<FixedValues | null>>;
};

export default function FixedCard({ fixedValues, setFixedValues }: Props) {
   const mediaType = "movie";
   const selectedID = `${mediaType}-${fixedValues?.selectedMedia?.id}`;

   const DURATION = 0.4;
   const handleClose = () => {
      setFixedValues(null);
   };

   return (
      <motion.div
         layout
         layoutRoot
         onClick={handleClose}
         exit={{ opacity: 1 }}
         transition={{ delay: DURATION }}
         className={`top-0 left-0 p-32 h-[100svh] z-10 fixed ${
            fixedValues ? "" : "pointer-events-none"
         }`}
      >
         <div
            id="SELECTED-MEDIA-CONTAINER"
            className="aspect-[2/3] h-full flex items-center justify-center"
         >
            {fixedValues && (
               <motion.div
                  layoutId={selectedID}
                  style={{
                     scale: fixedValues.scale,
                     height: fixedValues.minHeight,
                  }}
                  transition={{ duration: DURATION }}
                  className="aspect-[2/3] [perspective:2000px]"
               >
                  <motion.div
                     initial={{ rotateY: 180 }}
                     animate={{ rotateY: 360 }}
                     transition={{ duration: DURATION }}
                     className="relative [transform-style:preserve-3d] w-full h-full"
                  >
                     <Front media={fixedValues.selectedMedia} />
                     <Back
                        media={fixedValues.selectedMedia}
                        mediaType={mediaType}
                        onLearnMore={() => {}}
                     />
                  </motion.div>
               </motion.div>
            )}
         </div>
      </motion.div>
   );
}
