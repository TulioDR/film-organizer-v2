import Link from "next/link";
import usePosterAnimationContext from "../../../context/PosterAnimationContext";
import {
   changeDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/date";
import { motion } from "framer-motion";

import Poster from "../../Poster";
import { homeCard } from "../../../animations/homeAnimations";
import { useSelector } from "react-redux";

type Props = { movie: any };

export default function UpcomingCard({ movie }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   const { changeAnimatePoster } = usePosterAnimationContext();
   return (
      <motion.div variants={homeCard}>
         <Link
            href={`/movie/${movie.id}`}
            onClick={() => changeAnimatePoster(true)}
            className="rounded-2xl overflow-hidden group relative cursor-pointer"
         >
            <Poster
               alt={movie.title}
               posterPath={movie.backdrop_path || movie.poster_path}
               size="xl"
               backPoster
            />
            <div className="rounded-2xl w-full h-2/3 absolute bottom-0 bg-gradient-to-t from-dark-bg-primary to-transparent px-4 pb-3 flex flex-col justify-end">
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
         </Link>
      </motion.div>
   );
}
