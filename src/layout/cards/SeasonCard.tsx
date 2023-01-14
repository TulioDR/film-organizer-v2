import { motion } from "framer-motion";
import Poster from "../../components/Poster";

type Props = {
   season: any;
   openSeasonInfo: (season: any) => void;
};

const item = {
   initial: { opacity: 0, y: 100 },
   animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};

export default function SeasonCard({ season, openSeasonInfo }: Props) {
   return (
      <motion.article
         onClick={() => openSeasonInfo(season)}
         variants={item}
         className="flex rounded-xl h-40 lg:h-52 overflow-hidden cursor-pointer hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary hover:shadow-xl"
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
         <div className="px-3 w-full h-full overflow-y-auto main-scrollbar text-sm">
            <div className="text-base lg:text-lg font-bold text-light-text-hard dark:text-dark-text-hard">
               {season.name}
            </div>
            <div className="flex items-center text-light-text-soft dark:text-dark-text-soft my-1">
               <div>{season.air_date || "N/A"}</div>
               <div className="h-6 mx-2">|</div>
               <div>{season.episode_count} Episodes</div>
            </div>
            <div className="text-light-text-normal dark:text-dark-text-normal">
               {season.overview || "No overview available for this season"}
            </div>
         </div>
      </motion.article>
   );
}
