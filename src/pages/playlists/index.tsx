import { useEffect, useState } from "react";

import PageHead from "@/common/components/PageHead";
import ListsLoginAdvice from "@/features/pages/playlists/components/ListsLoginAdvice";
import NoListsMessage from "@/features/pages/playlists/components/NoListsMessage";
import PlaylistCard from "@/features/pages/playlists/components/PlaylistCard";
import CreatePlaylistButton from "@/features/pages/playlists/components/CreatePlaylistButton";
import { PlaylistWithItems } from "@/common/models/Playlist";
import CompactPlaylistsFilters from "@/features/pages/playlists/components/CompactPlaylistsFilters";
import { getAuth } from "@clerk/nextjs/server";
import { createClerkSupabaseClient } from "@/lib/supabaseClient";
import { fetchPlaylistsData } from "@/api/playlistsService";
import FilterCardsLayout from "@/common/components/FilterCardsLayout";
import usePlaylistsFilters from "@/features/pages/playlists/hooks/usePlaylistsFilters";
import useAppSelector from "@/store/hooks/useAppSelector";
import { getUserPlaylists } from "@/api/playlists";

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

export default function Playlists({ initialPlaylists }: Props) {
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   const [allPlaylists, setAllPlaylists] = useState<PlaylistWithItems[]>(
      initialPlaylists || [],
   );

   const { playlists } = useAppSelector((s) => s.playlists);

   useEffect(() => {
      const refresh = async () => {
         const newPlaylists = await getUserPlaylists(true);
         setAllPlaylists(newPlaylists);
      };
      refresh();
   }, [playlists]);

   const {
      setInputValue,
      setSelectedSort,
      filteredPlaylists,
      inputValue,
      selectedSort,
   } = usePlaylistsFilters(allPlaylists);

   if (initialPlaylists === null)
      return (
         <div className="h-[100svh] w-full flex items-center justify-center">
            <PageHead title="Login first" />
            <ListsLoginAdvice />
         </div>
      );
   return (
      <>
         <PageHead title="Playlists" />

         <div className="fixed top-14 xl:top-20 left-0 pr-4 lg:pr-32 z-20 w-full h-14 py-1 lg:py-0 xl:h-64 flex items-center justify-end pointer-events-none">
            <CreatePlaylistButton />
         </div>

         <FilterCardsLayout
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            title={"Playlists"}
            compactFilter={
               <CompactPlaylistsFilters
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  selectedSort={selectedSort}
                  setSelectedSort={setSelectedSort}
               />
            }
         >
            {initialPlaylists.length === 0 ? (
               <NoListsMessage text="this is so empty... Create list to save movies and series" />
            ) : filteredPlaylists.length > 0 ? (
               <div
                  className={`grid gap-1 xl:gap-4 grid-cols-1 w-full ${
                     isFilterOpen
                        ? "xl:grid-cols-2 2xl:grid-cols-3"
                        : "xl:grid-cols-3 2xl:grid-cols-4"
                  }`}
               >
                  {filteredPlaylists.map((playlist) => (
                     <PlaylistCard playlist={playlist} key={playlist.id} />
                  ))}
               </div>
            ) : (
               <NoListsMessage text="No playlist found" />
            )}
         </FilterCardsLayout>
      </>
   );
}
