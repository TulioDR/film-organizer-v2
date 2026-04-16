import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

import OpenCardLink from "./OpenCardLink";
import PlaylistCardPoster from "./PlaylistCardPoster";
import Playlist from "@/common/models/Playlist";
import DeletePlaylistHandler from "./DeletePlaylistHandler";
import UpdatePlaylistHandler from "./UpdatePlaylistHandler";

import { motion } from "framer-motion";
import LittlePill from "./LittlePill";

type Props = {
   playlist: Playlist;
   numberOfMovies: number;
   numberOfSeries: number;
   posterPaths: (string | null)[];
};

export default function PlaylistCard({
   playlist,
   numberOfMovies,
   numberOfSeries,
   posterPaths,
}: Props) {
   const totalItems = numberOfMovies + numberOfSeries;

   return (
      <motion.div
         layout
         style={{ borderRadius: STANDARD_RADIUS }}
         className="flex flex-col border border-border-light dark:border-border-dark bg-white dark:bg-black relative"
      >
         <div className="w-full flex items-center justify-center p-4 aspect-square relative">
            <LittlePill
               accent
               text={totalItems > 0 ? `${totalItems} items` : "empty"}
               className="absolute top-2 right-2"
            />
            <PlaylistCardPoster posterPaths={posterPaths} />
            <div className="absolute bottom-2 left-2 flex gap-2">
               <LittlePill text={`${numberOfMovies} movies`} />
               <LittlePill text={`${numberOfSeries} series`} />
            </div>
         </div>
         <div className={`flex flex-col w-full flex-1 gap-4 p-4 pt-0`}>
            <div className="flex flex-col w-full">
               <motion.div
                  layout="position"
                  className="w-full truncate h-12 relative flex items-center text-3xl font-thin text-black dark:text-white"
               >
                  {playlist.name}
               </motion.div>
               <motion.div
                  layout="position"
                  className="truncate text-black/50 dark:text-white/50 text-xs sm:text-sm w-full"
               >
                  {playlist.description}
               </motion.div>
            </div>
            <div className="w-full flex justify-end gap-1 h-12">
               <OpenCardLink href={`/playlists/${playlist.id}`} />
               <UpdatePlaylistHandler playlist={playlist} />
               <DeletePlaylistHandler playlistToDelete={playlist} />
            </div>
         </div>
      </motion.div>
   );
}
