import RevealHorizontal from "../../../animations/RevealHorizontal";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";

type Props = {
   media: any;
   mediaType: string;
};

export default function InfoBar({ media, mediaType }: Props) {
   return (
      <div className="flex justify-between items-center text-light-text-soft dark:text-dark-text-soft mt-2 text-sm">
         <RevealHorizontal>
            <div className="flex items-center">
               <Date date={media.first_air_date || media.release_date} />
               <span className="mx-2">|</span>
               {mediaType == "movie" && (
                  <>
                     <Runtime runtime={media.runtime} />
                     <span className="mx-2">|</span>
                  </>
               )}
               <Rating
                  rating={
                     media.release_dates?.results ||
                     media.content_ratings?.results
                  }
                  isMovie={mediaType === "movie"}
               />
            </div>
         </RevealHorizontal>
      </div>
   );
}
