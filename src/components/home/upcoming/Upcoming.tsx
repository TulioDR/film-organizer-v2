import { useRouter } from "next/router";
import {
   changeDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/date";
import Poster from "../../Poster";

type Props = { movie: any };

export default function Upcoming({ movie }: Props) {
   const router = useRouter();
   const goTo = () => {
      router.push(`/${"movie"}/${movie.id}`);
   };

   return (
      <div
         onClick={goTo}
         className="rounded-2xl aspect-video overflow-hidden shadow-md relative cursor-pointer"
      >
         <Poster
            alt={movie.title}
            posterPath={movie.backdrop_path || movie.poster_path}
            size="xl"
            backPoster
         />
         <div className="w-full absolute bottom-0 bg-gradient-to-t from-gray-900 to-transparent px-4 pb-3 pt-14">
            <div className="">{movie.title}</div>
            <div className="flex space-x-2 text-gray-500 dark:text-gray-300 text-sm">
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
