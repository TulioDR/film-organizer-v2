import useThemeContext from "../../../context/ThemeContext";
import useMediaDetails from "../../../hooks/useMediaDetails";
import {
   changeDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/date";

import Poster from "../../Poster";

type Props = { movie: any };

export default function Upcoming({ movie }: Props) {
   const { getMediaDetails } = useMediaDetails();
   const { themeColor } = useThemeContext();
   return (
      <div
         onClick={() => getMediaDetails("movie", movie.id)}
         className="rounded-2xl overflow-hidden group relative cursor-pointer"
      >
         <Poster
            alt={movie.title}
            posterPath={movie.backdrop_path || movie.poster_path}
            size="xl"
            backPoster
         />
         <div className="w-full absolute bottom-0 bg-gradient-to-t from-dark-bg to-transparent px-4 pb-3 pt-14">
            <div className="font-medium text-dark-text-hard relative truncate max-w-max">
               {movie.title}
               <div
                  style={{ backgroundColor: themeColor }}
                  className="h-[3px] w-0 group-hover:w-full duration-200 absolute left-0 bottom-0"
               ></div>
            </div>
            <div className="flex space-x-2 text-dark-text-normal text-sm">
               <span>{changeDateFormat(movie.release_date)}</span>
               {isReleased(movie.release_date) ? (
                  <span className="ml-1">(released)</span>
               ) : (
                  <span className="ml-1">
                     (in {daysToRelease(movie.release_date)} days)
                  </span>
               )}
            </div>
         </div>
      </div>
   );
}
