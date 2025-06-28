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
         className="flex gap-5 h-40 lg:h-60 w-full cursor-pointer"
      >
         <motion.div
            layoutId={`https://image.tmdb.org/t/p/w${780}${season.poster_path}`}
            className="h-full rounded-lg aspect-[2/3] overflow-hidden"
         >
            <Poster
               alt={season.name}
               posterPath={season.poster_path}
               size="lg"
            />
         </motion.div>
         <div className="flex-1 h-full overflow-y-auto main-scrollbar text-sm py-2">
            <div className="text-base font-oswald font-semibold text-white">
               {season.name}
            </div>
            <div className="flex items-center text-gray-200 my-1">
               <div>{changeDateFormat(season.air_date) || "N/A"}</div>
               <div className="mx-2">○</div>
               <div>{season.episode_count} Episodes</div>
            </div>
            <div className="text-gray-200">
               {season.overview || "No overview available for this season"}
            </div>
         </div>
      </article>
   );
}
