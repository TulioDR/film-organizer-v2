import { motion } from "framer-motion";
import Poster from "@/components/Poster";
import { changeDateFormat } from "@/utils/date";

type Props = {
   season: any;
   onClick: () => void;
};

export default function SeasonCard({ season, onClick }: Props) {
   return (
      <article className="flex w-full overflow-hidden rounded-lg text-black bg-white shadow-xl">
         <motion.div
            layoutId={`https://image.tmdb.org/t/p/w${780}${season.poster_path}`}
            className="h-full rounded-l-lg aspect-[2/3] overflow-hidden w-1/3"
         >
            <Poster
               alt={season.name}
               posterPath={season.poster_path}
               size="lg"
            />
         </motion.div>
         <div className="flex-1 h-full p-4 flex flex-col gap-2">
            <div className="">
               <div className="text-2xl font-bold">{season.name}</div>
               <div className="flex text-xs items-center text-gray-700 my-1">
                  <div>{changeDateFormat(season.air_date) || "N/A"}</div>
                  <div className="mx-2">|</div>
                  <div>{season.episode_count} Episodes</div>
               </div>
            </div>
            <div className="text-gray-700 text-xs 2xl:text-sm flex-1 overflow-y-auto">
               {season.overview || "No overview available for this season"}
            </div>
            <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 1 }}
               onClick={onClick}
               className="h-12 bg-blue-500 text-white rounded-md px-4 flex items-center text-sm w-max uppercase font-medium"
            >
               Learn More
            </motion.button>
         </div>
      </article>
   );
}
