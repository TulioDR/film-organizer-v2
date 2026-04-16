import { useEffect, useState } from "react";

import PageHead from "@/common/components/PageHead";
import ListsLoginAdvice from "@/features/pages/playlists/components/ListsLoginAdvice";
import NoListsMessage from "@/features/pages/playlists/components/NoListsMessage";
import PlaylistCard from "@/features/pages/playlists/components/PlaylistCard";
import CreatePlaylistButton from "@/features/pages/playlists/components/CreatePlaylistButton";
import { PlaylistWithItems } from "@/common/models/Playlist";
import MainFilter from "@/features/mainFilter/components/MainFilter";
import CompactPlaylistsFilters from "@/features/pages/playlists/components/CompactPlaylistsFilters";
import { getAuth } from "@clerk/nextjs/server";
import { createClerkSupabaseClient } from "@/lib/supabaseClient";
import { fetchPlaylistsData } from "@/api/playlistsService";

export const getServerSideProps = async (context: any) => {
   const authData = getAuth(context.req);
   const userId = authData.userId;

   if (!userId) {
      return { props: { initialPlaylists: null } };
   }

   try {
      const supabase = createClerkSupabaseClient(authData);

      const playlists = await fetchPlaylistsData(supabase, userId, true);

      return {
         props: {
            initialPlaylists: JSON.parse(JSON.stringify(playlists || [])),
            userId,
         },
      };
   } catch (error) {
      console.error("Direct Fetch Error:", error);
      return { props: { initialPlaylists: [] } };
   }
};
type Props = {
   initialPlaylists: PlaylistWithItems[] | null;
};

export default function Playlists({ initialPlaylists: playlists }: Props) {
   const [isFilterOpen, setIsFilterOpen] = useState(false);
   const [filteredPlaylists, setFilteredPlaylists] = useState<
      PlaylistWithItems[]
   >(playlists || []);

   useEffect(() => {
      console.log("the initial playlists are:");
      console.log(playlists);
   }, [playlists]);

   if (playlists === null)
      return (
         <div className="h-[100svh] w-full flex items-center justify-center">
            <PageHead title="Login first" />
            <ListsLoginAdvice />
         </div>
      );
   return (
      <div className="w-full px-4 lg:px-32 pt-14 pb-14 xl:pb-4 mt-4 xl:pt-20">
         <PageHead title="Playlists" />

         <MainFilter
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            title={"Playlists"}
            compactContent={
               <CompactPlaylistsFilters
                  playlists={playlists}
                  setFilteredPlaylists={setFilteredPlaylists}
               />
            }
         />
         <div className="fixed top-14 xl:top-20 left-0 pr-4 lg:pr-32 z-10 w-full h-14 py-1 lg:py-0 xl:h-64 flex items-center justify-end pointer-events-none">
            <CreatePlaylistButton />
         </div>
         <div className="w-full mt-14 xl:mt-64">
            {playlists.length === 0 ? (
               <NoListsMessage text="this is so empty... Create list to save movies and series" />
            ) : filteredPlaylists.length > 0 ? (
               <div
                  className={`grid gap-1 xl:gap-4 grid-cols-1 w-full ${
                     isFilterOpen
                        ? "xl:grid-cols-2 2xl:grid-cols-3 xl:pl-[426px]"
                        : "xl:grid-cols-3 2xl:grid-cols-4"
                  }`}
               >
                  {filteredPlaylists.map((playlist) => {
                     const movies = playlist.playlist_items.filter(
                        (i) => i.media_type === "movie",
                     ).length;
                     const series = playlist.playlist_items.filter(
                        (i) => i.media_type === "tv",
                     ).length;
                     const posters = playlist.playlist_items
                        .slice(0, 3)
                        .map((i) => i.media.poster_path);
                     return (
                        <PlaylistCard
                           playlist={playlist}
                           key={playlist.id}
                           numberOfMovies={movies}
                           numberOfSeries={series}
                           posterPaths={posters}
                        />
                     );
                  })}
               </div>
            ) : (
               <NoListsMessage text="No playlist found" />
            )}
         </div>
      </div>
   );
}
