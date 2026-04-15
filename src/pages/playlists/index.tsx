import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import PageHead from "@/common/components/PageHead";
import useAppSelector from "@/store/hooks/useAppSelector";
import ListsLoginAdvice from "@/features/pages/playlists/components/ListsLoginAdvice";
import NoListsMessage from "@/features/pages/playlists/components/NoListsMessage";
import PlaylistCard from "@/features/pages/playlists/components/PlaylistCard";
import CreatePlaylistButton from "@/features/pages/playlists/components/CreatePlaylistButton";
import Playlist from "@/common/models/Playlist";
import dynamic from "next/dynamic";
import MainFilter from "@/features/mainFilter/components/MainFilter";
import CompactPlaylistsFilters from "@/features/pages/playlists/components/CompactPlaylistsFilters";
const LoadingSpinner = dynamic(
   () => import("@/common/components/LoadingSpinner"),
   { ssr: false },
);

export default function Playlists() {
   const { user, isLoaded } = useUser();
   const { playlists } = useAppSelector((state) => state.playlists);
   const [filteredPlaylists, setFilteredPlaylists] = useState<Playlist[]>([]);

   const [isFilterOpen, setIsFilterOpen] = useState(false);

   if (!isLoaded)
      return (
         <div className="h-[100svh] w-full flex items-center justify-center">
            <PageHead title="loading playlists..." />
            <div className="w-64">
               <LoadingSpinner />
            </div>
         </div>
      );
   if (!user)
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
                        ? "xl:grid-cols-1 xl:pl-[426px]"
                        : "xl:grid-cols-2"
                  }`}
               >
                  {filteredPlaylists.map((playlist) => (
                     <PlaylistCard playlist={playlist} key={playlist.id} />
                  ))}
               </div>
            ) : (
               <NoListsMessage text="No lists found" />
            )}
         </div>
      </div>
   );
}
