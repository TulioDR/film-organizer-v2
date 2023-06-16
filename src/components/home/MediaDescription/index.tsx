import HomeTitle from "./HomeTitle";
import LearnMoreButton from "./LearnMoreButton";
import HomeBookmark from "./HomeBookmark";
import { AnimatePresence, motion } from "framer-motion";
import {
   changeDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/date";
import { mediaDescription } from "@/animations/homeAnimations";

type Props = { currentMedia: any; currentShowcase: string };

export default function MediaDescription({
   currentMedia,
   currentShowcase,
}: Props) {
   const date = currentMedia.release_date || currentMedia.first_air_date;
   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={currentMedia.id + currentShowcase}
            variants={mediaDescription}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-2 2xl:space-y-3 font-oswald"
         >
            <div className="text-white font-extrabold tracking-wide uppercase flex gap-1">
               <span>{changeDateFormat(date, true)}</span>
               {currentShowcase === "upcoming" && (
                  <span>
                     {isReleased(currentMedia.release_date) ? (
                        <span className="ml-1">(released)</span>
                     ) : (
                        <span className="ml-1">
                           (in {daysToRelease(currentMedia.release_date)} days)
                        </span>
                     )}
                  </span>
               )}
            </div>
            <HomeTitle>{currentMedia.title || currentMedia.name}</HomeTitle>
            <div className="hidden sm:flex items-center text-dark-text-hard h-10 2xl:h-14 space-x-3 2xl:space-x-4">
               <HomeBookmark movie={currentMedia} />
               <LearnMoreButton id={currentMedia.id} onClick={() => {}} />
            </div>
         </motion.div>
      </AnimatePresence>
   );
}
