import Poster from "../../components/Poster";
import { motion } from "framer-motion";
import { staggerItem } from "../../animations/StaggerCards";

type Props = {
   episode: any;
};

export default function EpisodeCard({ episode }: Props) {
   return (
      <motion.article
         variants={staggerItem}
         className="aspect-[2/3] w-full rounded-xl p-3 flex flex-col bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-lg hover:-translate-y-2 duration-200"
      >
         <div className="w-full rounded-lg -mt-6 shadow-lg relative overflow-hidden">
            <Poster
               alt={episode.name}
               size="md"
               posterPath={episode.still_path}
               backPoster
            />
            <div className="px-2 pb-1 pt-4 absolute bottom-0 w-full flex justify-between items-center text-dark-text-hard bg-gradient-to-t from-black to-transparent">
               <div className="text-xs">Episode {episode.episode_number}</div>
               <div className="flex items-center space-x-1">
                  <div>
                     {episode.vote_count
                        ? episode.vote_average.toFixed(1)
                        : "N/A"}
                  </div>
                  <div className="material-icons text-yellow-600 text-lg grid place-items-center">
                     star_rate
                  </div>
               </div>
            </div>
         </div>
         <div className="overflow-y-auto flex-1 main-scrollbar">
            <div className="text-lg font-medium my-1 text-light-text-hard dark:text-dark-text-hard">
               {episode.name}
            </div>
            <p className="text-xs sm:text-sm leading-snug text-light-text-normal dark:text-dark-text-normal">
               {episode.overview || "No description available for this episode"}
            </p>
         </div>
      </motion.article>
   );
}
