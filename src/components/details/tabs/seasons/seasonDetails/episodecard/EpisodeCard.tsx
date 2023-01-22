import { motion } from "framer-motion";
import InfoInPoster from "./InfoInPoster";
import Poster from "../../../../../Poster";
import { staggerItem } from "../../../../../../animations/StaggerCards";
import { changeDateFormat } from "../../../../../../utils/date";

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
            <InfoInPoster episode={episode} />
         </div>
         <div className="overflow-y-auto flex-1 main-scrollbar">
            <div className="text-xs sm:text-sm text-light-text-soft dark:text-dark-text-soft">
               {changeDateFormat(episode.air_date)}
            </div>
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
