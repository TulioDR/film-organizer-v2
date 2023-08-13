import { MediaModel } from "@/models/MediaModel";
import { changeDateFormat, daysToRelease, isReleased } from "@/utils/date";

type Props = {
   currentMedia: MediaModel;
   currentShowcase: string;
};

export default function HomeDate({ currentMedia, currentShowcase }: Props) {
   const date = currentMedia.release_date || currentMedia.first_air_date;
   return (
      <div className="font-extrabold tracking-wide uppercase flex gap-1">
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
   );
}
