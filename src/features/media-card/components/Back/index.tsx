import { useState } from "react";
import BackTitle from "./BackTitle";
import LearnMore from "./LearnMore";
import { Media } from "@/common/models/Media";
import BackHeader from "./BackHeader";
import Responsive from "@/common/components/Responsive";
import { SM_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import OverviewButton from "./Overview/OverviewButton";
import { AnimatePresence, motion } from "framer-motion";
import BackIcon from "./BackIcon";
import Overview from "./Overview/Overview";
import Bookmark from "@/features/bookmark/components/Bookmark";

type Props = {
   media: Media;
   mediaType: "movie" | "tv";
   onLearnMore: () => void;
   isLoading: boolean;
   id: string;
   setIsBookmarkOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Back({
   media,
   mediaType,
   onLearnMore,
   isLoading,
   id,
   setIsBookmarkOpen,
}: Props) {
   const title = media.name || media.title;
   const releaseDate = media.release_date || media.first_air_date;
   const overview = media.overview || "N/A";

   const [openOverview, setOpenOverview] = useState<boolean>(false);
   const toggleOverview = () => setOpenOverview((prev) => !prev);

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
               className="w-full h-full flex flex-col gap-2 xl:gap-4 p-2 xl:p-4 overflow-hidden z-10 relative"
            >
               <BackTitle title={title} year={releaseDate} />
               <div className="w-full flex flex-col gap-1 xl:gap-2">
                  <div className="w-full h-9">
                     <OverviewButton onClick={toggleOverview} />
                  </div>
                  <div className="flex h-12 gap-1 xl:gap-2">
                     <Bookmark
                        media={media}
                        mediaType={mediaType}
                        setIsBookmarkOpen={setIsBookmarkOpen}
                     />
                     <LearnMore id={id} onClick={onLearnMore} />
                  </div>
               </div>
            </motion.div>
            <BackIcon isLoading={isLoading} />
         </div>
         <AnimatePresence>
            {openOverview && (
               <Overview onClick={toggleOverview} overview={overview} />
            )}
         </AnimatePresence>
      </div>
   );
}
