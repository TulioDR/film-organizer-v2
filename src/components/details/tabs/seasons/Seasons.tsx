import Poster from "../../../Poster";
import { motion } from "framer-motion";

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
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

type Props = {
   seasons: any[];
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
   setSelectedSeason: React.Dispatch<React.SetStateAction<number | null>>;
};
export default function Seasons({
   seasons,
   setSelectedImg,
   setSelectedSeason,
}: Props) {
   const openSeasonInfo = (season: any) => {
      setSelectedImg(`https://image.tmdb.org/t/p/w${780}${season.poster_path}`);
      setSelectedSeason(season.season_number);
   };

   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4 pt-5 pr-4 overflow-y-auto h-full"
      >
         {seasons.map((season) => (
            <motion.article
               onClick={() => openSeasonInfo(season)}
               variants={item}
               key={season.id}
               className="flex rounded-xl h-40 lg:h-52 overflow-hidden cursor-pointer hover:bg-gray-700"
            >
               <motion.div
                  layoutId={`https://image.tmdb.org/t/p/w${780}${
                     season.poster_path
                  }`}
                  className="h-full"
               >
                  <Poster
                     alt={season.name}
                     posterPath={season.poster_path}
                     size="lg"
                  />
               </motion.div>
               <div className="p-3 pr-0 h-full text-sm">
                  <div className="w-full h-full overflow-y-auto pr-3">
                     <div className="text-base font-medium">{season.name}</div>
                     <div className="flex items-center text-gray-400 dark:text-gray-400 my-1">
                        <div>{season.air_date || "N/A"}</div>
                        <div className="h-6 mx-2">|</div>
                        <div>{season.episode_count} Episodes</div>
                     </div>
                     <div>
                        {season.overview ||
                           "No overview available for this season"}
                     </div>
                  </div>
               </div>
            </motion.article>
         ))}
      </motion.div>
   );
}
