import { MediaModel } from "@/models/MediaModel";
import LearnMore from "../LearnMore";
import MainCardBookmark from "../MainCardBookmark";
import MainCardDate from "./MainCardDate";
import MainCardScore from "./MainCardScore";
import MainCardOverview from "./MainCardOverview";
import Poster from "@/components/Poster";
import BackButton from "../BackButton";
import MediaCardBackContainer from "./MediaCardBackContainer";
import MediaCardBackTitle from "./MediaCardBackTitle";

type Props = {
   media: MediaModel;
   closeCard: () => void;
};

export default function MainCardBack({ media, closeCard }: Props) {
   const onLearnMoreClick = () => {};
   const handleBookmarkClick = () => {};
   return (
      <MediaCardBackContainer>
         <div className="flex-1 overflow-hidden space-y-2 p-4 pb-0">
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
                     <MainCardScore voteAverage={media.vote_average} />
                  </div>
               </div>
            </div>
            <MediaCardBackTitle>{media.title || media.name}</MediaCardBackTitle>
            <MainCardOverview overview={media.overview || "N/A"} />
         </div>
         <div className="flex justify-between items-center gap-4 w-full p-4">
            <LearnMore onClick={onLearnMoreClick} />
            <MainCardBookmark
               onClick={handleBookmarkClick}
               isMediaSaved={false}
            />
         </div>
      </MediaCardBackContainer>
   );
}
