import ReactLenis from "lenis/react";
import SearchPlaylistFilter from "../PlaylistsFilters/SearchPlaylistFilter";
import Playlist from "@/common/models/Playlist";

type Props = {
   setFilteredPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
};

export default function CompactPlaylistsFilters({
   setFilteredPlaylists,
}: Props) {
   return (
      <ReactLenis className="h-full w-full overflow-y-auto">
         <div className="grid gap-4 p-4 min-h-max">
            <SearchPlaylistFilter setFilteredPlaylists={setFilteredPlaylists} />
         </div>
      </ReactLenis>
   );
}
