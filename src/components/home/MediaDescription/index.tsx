import HomeGenres from "./HomeGenres";
import HomeTitle from "./HomeTitle";
import LearnMoreButton from "./LearnMoreButton";
import HomeBookmark from "./HomeBookmark";
import { AnimatePresence, motion } from "framer-motion";

type Props = { currentMedia: any };

export default function MediaDescription({ currentMedia }: Props) {
   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={currentMedia.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-2 2xl:space-y-3"
         >
            <HomeTitle>{currentMedia.title || currentMedia.name}</HomeTitle>
            <HomeGenres />
            <div className="hidden sm:flex items-center text-dark-text-hard h-10 2xl:h-14 space-x-3">
               <HomeBookmark movie={currentMedia} />
               <LearnMoreButton id={currentMedia.id} onClick={() => {}} />
            </div>
         </motion.div>
      </AnimatePresence>
   );
}
