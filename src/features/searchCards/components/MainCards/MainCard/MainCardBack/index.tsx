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
   mediaType: "tv" | "movie";
   closeCard: () => void;
   leave: () => void;
};

export default function MainCardBack({
   media,
   closeCard,
   mediaType,
   leave,
}: Props) {
   return (
      <div className="absolute top-0 left-0 gap-2 w-full h-full flex flex-col border-8 bg-secondary-light dark:bg-secondary-dark border-secondary-light dark:border-secondary-dark [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden rounded-3xl">
         <div className="relative">
            <BackButton onClick={closeCard} />
            <div className="overflow-hidden shadow-xl relative rounded-br-[80px]">
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.backdrop_path}
                  size="lg"
                  backPoster
                  noRounded
               />
               <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-gradient-to-t from-black/80 to-transparent z-10 px-2 pb-1 text-dark-1">
                  <MainCardDate
                     date={media.release_date || media.first_air_date}
                  />
               </div>
            </div>
         </div>
         <MediaCardBackTitle>{media.title || media.name}</MediaCardBackTitle>
         <MainCardOverview overview={media.overview || "N/A"} />
         <div className="flex justify-between items-center gap-2 w-full h-10">
            <LearnMore
               mediaType={mediaType}
               media={media}
               closeCard={closeCard}
               leave={leave}
            />
            <MainCardBookmark mediaType={mediaType} media={media} />
         </div>
      </div>
   );
}
