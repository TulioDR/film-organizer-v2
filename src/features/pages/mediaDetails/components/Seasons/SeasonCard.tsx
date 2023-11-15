import { motion } from "framer-motion";
import Poster from "@/components/Poster";
import { changeDateFormat } from "@/utils/date";

type Props = {
   season: any;
   onClick: () => void;
};

export default function SeasonCard({ season, onClick }: Props) {
   return (
      <article
         onClick={onClick}
         className="flex gap-5 h-40 lg:h-52 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark hover:shadow-xl"
      >
         <motion.div
            layoutId={`https://image.tmdb.org/t/p/w${780}${season.poster_path}`}
            className="h-full"
         >
            <Poster
               alt={season.name}
               posterPath={season.poster_path}
               size="lg"
            />
         </motion.div>
         <div className="w-full h-full overflow-y-auto main-scrollbar text-sm">
            <div className="text-base font-oswald font-semibold text-light-1 dark:text-dark-1">
               {season.name}
            </div>
            <div className="flex items-center text-light-2 dark:text-dark-2 my-1">
               <div>{changeDateFormat(season.air_date) || "N/A"}</div>
               <div className="mx-2">○</div>
               <div>{season.episode_count} Episodes</div>
            </div>
            <div className="text-light-2 dark:text-dark-2">
               {season.overview || "No overview available for this season"}
            </div>
         </div>
      </article>
   );
}
