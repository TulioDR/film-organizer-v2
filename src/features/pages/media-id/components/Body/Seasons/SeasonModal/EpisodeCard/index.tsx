import { motion } from "framer-motion";
import InfoInPoster from "./InfoInPoster";

import { changeDateFormat } from "@/common/utils/date";
import Poster from "@/common/components/Poster";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   episode: any;
};

export default function EpisodeCard({ episode }: Props) {
   return (
      <motion.article
         style={{ borderRadius: STANDARD_RADIUS }}
         className="w-full aspect-[2/3] shadow-md border border-border-light dark:border-border-dark overflow-hidden relative flex flex-col"
      >
         <div className="w-full relative">
            <Poster alt={episode.name} posterPath={episode.still_path} back />
            <InfoInPoster episode={episode} />
         </div>
         <div className="p-2 flex flex-col gap-1 w-full flex-1 overflow-hidden">
            <div className="text-xs sm:text-sm  font-oswald">
               {changeDateFormat(episode.air_date)}
            </div>
            <div className="uppercase font-oswald font-medium">
               {episode.name}
            </div>
            <div className="w-full flex-1 relative overflow-hidden">
               <p className="text-xs sm:text-sm leading-snug text-black/50 dark:text-white/50">
                  {episode.overview ||
                     "No description available for this episode"}
               </p>
               <p className="text-xs sm:text-sm leading-snug text-black/50 dark:text-white/50">
                  {episode.overview ||
                     "No description available for this episode"}
               </p>
               <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t dark:from-black from-white to-transparent z-10" />
            </div>
         </div>
      </motion.article>
   );
}
