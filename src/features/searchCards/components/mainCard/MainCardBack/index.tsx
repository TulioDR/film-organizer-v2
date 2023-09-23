import { MediaModel } from "@/models/MediaModel";
import LearnMore from "./LearnMore";
import MainCardBookmark from "./MainCardBookmark";
import MainCardDate from "./MainCardDate";
import MainCardOverview from "./MainCardOverview";
import Poster from "@/components/Poster";
import BackButton from "./BackButton";
import MediaCardBackTitle from "./MediaCardBackTitle";

type Props = {
   media: MediaModel;
   closeCard: () => void;
};

export default function MainCardBack({ media, closeCard }: Props) {
   const onLearnMoreClick = () => {};
   const handleBookmarkClick = () => {};
   return (
      <div className="absolute top-0 left-0 p-4 gap-2 w-full h-full flex flex-col bg-secondary-light dark:bg-secondary-dark [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden rounded-3xl">
         <div className="relative">
            <BackButton onClick={closeCard} />
            <div className="rounded-xl overflow-hidden shadow-xl relative">
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.backdrop_path}
                  size="lg"
                  backPoster
               />
               <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent z-10 px-2 pb-1 text-dark-1">
                  <MainCardDate
                     date={media.release_date || media.first_air_date}
                  />
                  {/* <MainCardScore voteAverage={media.vote_average} /> */}
               </div>
            </div>
         </div>
         <MediaCardBackTitle>{media.title || media.name}</MediaCardBackTitle>
         <MainCardOverview overview={media.overview || "N/A"} />
         <div className="flex justify-between items-center gap-4 w-full">
            <LearnMore onClick={onLearnMoreClick} />
            <MainCardBookmark
               onClick={handleBookmarkClick}
               isMediaSaved={false}
            />
         </div>
      </div>
   );
}
