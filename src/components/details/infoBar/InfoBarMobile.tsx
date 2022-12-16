import RevealHorizontal from "../../../animations/RevealHorizontal";
import Date from "./Date";
import Rating from "./Rating";
import Runtime from "./Runtime";
import Score from "./Score";

type Props = {
   media: any;
   mediaType: string;
};

export default function InfoBarMobileMobile({ media, mediaType }: Props) {
   return (
      <div className="text-light-text-soft dark:text-dark-text-soft mt-5 text-base md:text-lg">
         <RevealHorizontal>
            <div className="flex flex-col">
               <Subtitle>Released:</Subtitle>
               <div className="ml-2">
                  <Date date={media.first_air_date || media.release_date} />
               </div>
               {mediaType == "movie" && (
                  <>
                     <Subtitle>Duration:</Subtitle>
                     <div className="ml-2">
                        <Runtime runtime={media.runtime} />
                     </div>
                  </>
               )}
               <Subtitle>Rated:</Subtitle>
               <div className="ml-2">
                  <Rating
                     rating={
                        media.release_dates?.results ||
                        media.content_ratings?.results
                     }
                     isMovie={mediaType === "movie"}
                  />
               </div>
            </div>
            <Subtitle>Score:</Subtitle>
            <div className="ml-2">
               <Score score={media.vote_average} />
            </div>
         </RevealHorizontal>
      </div>
   );
}

interface SubProps {
   children: React.ReactNode;
}

function Subtitle({ children }: SubProps) {
   return (
      <div className="text-light-text-hard dark:text-dark-text-hard text-sm md:text-base">
         {children}
      </div>
   );
}
