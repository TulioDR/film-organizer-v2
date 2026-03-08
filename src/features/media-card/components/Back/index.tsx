import React from "react";
import BackTitle from "./BackTitle";
import LearnMore from "./LearnMore";
import { Media } from "@/common/models/Media";
import BackHeader from "./BackHeader";
import Responsive from "@/common/components/Responsive";
import { SM_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import OverviewButton from "./Overview/OverviewButton";
import CardBookmark from "./CardBookmark";
import { motion } from "framer-motion";
import Reel from "@/features/layout/loader/components/Reel";

type Props = {
   media: Media;
   mediaType: "movie" | "tv";
   onLearnMore: () => void;
   isLoading: boolean;
   id: string;
};

export default function Back({
   media,
   mediaType,
   onLearnMore,
   isLoading,
   id,
}: Props) {
   const title = media.name || media.title;
   const releaseDate = media.release_date || media.first_air_date;
   const overview = media.overview || "N/A";

   return (
      <div className="rounded-lg absolute w-full h-full top-0 left-0 flex flex-col [transform:rotateY(180deg)] bg-primary-light dark:bg-primary-dark border-border-width border-border-light dark:border-border-dark [backface-visibility:hidden] overflow-hidden shadow-xl">
         <Responsive minWidth={SM_MEDIA_QUERY}>
            <BackHeader media={media} isLoading={isLoading} />
         </Responsive>
         <div className="flex-1 w-full overflow-hidden relative">
            <motion.div
               initial={false}
               animate={{ opacity: isLoading ? 0 : 1 }}
               transition={{ duration: 0.2 }}
               className="w-full h-full flex flex-col p-4 overflow-hidden z-10 relative"
            >
               <BackTitle title={title} year={releaseDate} />
               <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex gap-2 h-9">
                     <CardBookmark media={media} mediaType={mediaType} />
                     <OverviewButton />
                  </div>
                  <LearnMore id={id} onClick={onLearnMore} />
               </div>
            </motion.div>
            <motion.div
               initial={false}
               animate={{
                  opacity: isLoading ? 1 : 0.2,
                  x: isLoading ? 0 : "33%",
                  y: isLoading ? 0 : "33%",
               }}
               transition={{ duration: 0.2 }}
               className="w-full h-full absolute top-0 left-0 flex items-center justify-center pointer-events-none"
            >
               <div className="w-1/2 aspect-square">
                  <Reel spin={isLoading} />
               </div>
            </motion.div>
         </div>
      </div>
   );
}
