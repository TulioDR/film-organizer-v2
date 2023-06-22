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
         className="flex gap-5 rounded-xl h-40 lg:h-52 overflow-hidden cursor-pointer hover:bg-accent hover:shadow-xl"
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
            <div className="text-base font-oswald font-semibold text-white">
               {season.name}
            </div>
            <div className="flex items-center text-text-3 my-1">
               <div>{changeDateFormat(season.air_date, true) || "N/A"}</div>
               <div className="mx-2">○</div>
               <div>{season.episode_count} Episodes</div>
            </div>
            <div className="text-text-2">
               {season.overview || "No overview available for this season"}
            </div>
         </div>
      </article>
   );
}
