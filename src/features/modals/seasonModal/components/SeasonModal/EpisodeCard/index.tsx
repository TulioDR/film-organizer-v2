import { motion } from "framer-motion";
import InfoInPoster from "./InfoInPoster";

import { changeDateFormat } from "@/utils/date";
import Poster from "@/components/Poster";
import { useState } from "react";

type Props = {
   episode: any;
};

export default function EpisodeCard({ episode }: Props) {
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const enterHover = () => {
      setIsHovered(true);
   };

   const leaveHover = () => {
      setIsHovered(false);
   };

   return (
      <motion.article
         onHoverStart={enterHover}
         onHoverEnd={leaveHover}
         className="w-full bg-accent shadow-lg rounded-xl hover:scale-105 hover:z-10 duration-200"
      >
         <div className="w-full relative rounded-t-xl overflow-hidden">
            <Poster
               alt={episode.name}
               size="lg"
               posterPath={episode.still_path}
               backPoster
            />
            <InfoInPoster episode={episode} />
         </div>
         <div className="p-3 space-y-1">
            <div className="text-xs sm:text-sm text-text-2 font-oswald">
               {changeDateFormat(episode.air_date)}
            </div>
            <div className="uppercase font-oswald font-medium text-text-1">
               {episode.name}
            </div>
            {isHovered && (
               <div className="absolute left-0 w-full pb-3 px-3 bg-accent rounded-b-xl">
                  <p className="text-xs sm:text-sm leading-snug text-text-2">
                     {episode.overview ||
                        "No description available for this episode"}
                  </p>
               </div>
            )}
         </div>
      </motion.article>
   );
}
