import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

import OpenCardLink from "./OpenCardLink";
import PlaylistCardPoster from "./PlaylistCardPoster";
import Playlist from "@/common/models/Playlist";
import DeletePlaylistHandler from "./DeletePlaylistHandler";
import UpdatePlaylistHandler from "./UpdatePlaylistHandler";

import { motion } from "framer-motion";

type Props = {
   playlist: Playlist;
};

export default function PlaylistCard({ playlist }: Props) {
   return (
      <motion.div
         layout
         style={{ borderRadius: STANDARD_RADIUS }}
         className="flex flex-col border border-border-light dark:border-border-dark bg-white dark:bg-black"
      >
         <PlaylistCardPoster />
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
            <motion.div
               layout="position"
               className="w-full flex justify-end gap-1 h-12"
            >
               <OpenCardLink href={`/playlists/${playlist.id}`} />
               <UpdatePlaylistHandler playlist={playlist} />
               <DeletePlaylistHandler playlistToDelete={playlist} />
            </motion.div>
         </div>
         {/* <PlaylistCardPoster />
         <div className="flex-1 h-full flex flex-col gap-8 justify-between p-4 pt-8 pl-8 overflow-hidden">
            <div className="flex flex-col w-full">
               <div className="w-full truncate h-12 relative flex items-center text-3xl font-thin text-black dark:text-white">
                  {playlist.name}
               </div>
               <div className="truncate text-black/50 dark:text-white/50 text-xs sm:text-sm md:text-base w-full">
                  {playlist.description}
               </div>
            </div>
            <div className="w-full flex justify-end gap-1 h-12">
               <OpenCardLink href={`/playlists/${playlist.id}`} />
               <UpdatePlaylistHandler playlist={playlist} />
               <DeletePlaylistHandler playlistToDelete={playlist} />
            </div>
         </div> */}
      </motion.div>
   );
}
