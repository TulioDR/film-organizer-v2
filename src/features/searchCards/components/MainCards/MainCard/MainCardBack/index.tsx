import { MediaModel } from "@/models/MediaModel";
import LearnMore from "./LearnMore";
import MainCardDate from "./MainCardDate";
import MainCardOverview from "./MainCardOverview";
import Poster from "@/components/Poster";
import BackButton from "./BackButton";
import MediaCardBackTitle from "./MediaCardBackTitle";
import BookmarkButton from "@/features/bookmark/components/BookmarkButton";

type Props = {
   media: MediaModel;
   mediaType: "tv" | "movie";
   closeCard: () => void;
   leave: () => void;
   closeWithoutRemove: () => void;
};

export default function MainCardBack({
   media,
   closeCard,
   mediaType,
   leave,
   closeWithoutRemove,
}: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-full flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden rounded-3xl">
         <div className="relative">
            <BackButton onClick={closeCard} />
            <div className="overflow-hidden shadow-xl relative">
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.backdrop_path}
                  size="lg"
                  backPoster
                  noRounded
               />
               <div className="absolute bottom-0 left-0 pr-5 pb-6 w-full h-full flex justify-end items-end bg-gradient-to-t from-black/80 to-transparent z-10 text-dark-1">
                  <MainCardDate
                     date={media.release_date || media.first_air_date}
                  />
               </div>
            </div>
         </div>
         <div className="bg-secondary-light dark:bg-secondary-dark overflow-hidden p-5 space-y-2 flex-1 flex flex-col rounded-t-3xl -mt-6 z-10">
            <MediaCardBackTitle>{media.title || media.name}</MediaCardBackTitle>
            <MainCardOverview overview={media.overview || "N/A"} />
            <div className="flex justify-between items-center gap-5 w-full h-10">
               <LearnMore
                  mediaType={mediaType}
                  media={media}
                  closeCard={closeWithoutRemove}
                  leave={leave}
               />
               <div className="overflow-hidden rounded-lg">
                  <BookmarkButton mediaType={mediaType} media={media} />
               </div>
            </div>
         </div>
      </div>
   );
}
