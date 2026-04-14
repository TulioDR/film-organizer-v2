import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

import OpenCardLink from "./OpenCardLink";
import PlaylistCardPoster from "./PlaylistCardPoster";
import Playlist from "@/common/models/Playlist";
import DeletePlaylistHandler from "./DeletePlaylistHandler";
import UpdatePlaylistHandler from "./UpdatePlaylistHandler";
// import DeletePlaylistHandler from "./DeletePlaylistHandler";

type Props = {
   playlist: Playlist;
};

export default function PlaylistCard({ playlist }: Props) {
   return (
      <div
         style={{ borderRadius: STANDARD_RADIUS }}
         className="h-56 flex gap-8 group border border-border-light dark:border-border-dark bg-white dark:bg-black"
      >
         <PlaylistCardPoster />
         <div className="flex-1 h-full flex flex-col justify-between p-4 pt-8">
            <div className="w-full h-12 relative flex items-center text-3xl font-thin text-black dark:text-white">
               {playlist.name}
            </div>
            <div className="w-full flex justify-end gap-1 h-12">
               <OpenCardLink href={`/playlists/${playlist.id}`} />
               <UpdatePlaylistHandler playlist={playlist} />
               <DeletePlaylistHandler playlistToDelete={playlist} />
            </div>
         </div>
      </div>
   );
}
