import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import PageHead from "@/common/components/PageHead";
import useAppSelector from "@/store/hooks/useAppSelector";
import ListsLoginAdvice from "@/features/pages/playlists/components/ListsLoginAdvice";
import NoListsMessage from "@/features/pages/playlists/components/NoListsMessage";
import PageTitle from "@/common/components/PageTitle";
import PlaylistCard from "@/features/pages/playlists/components/PlaylistCard";
import CreatePlaylistButton from "@/features/pages/playlists/components/CreatePlaylistButton";
import ListFinder from "@/features/pages/playlists/components/ListFinder";
import Playlist from "@/common/models/Playlist";
import dynamic from "next/dynamic";
const LoadingSpinner = dynamic(
   () => import("@/common/components/LoadingSpinner"),
   { ssr: false },
);

export default function Playlists() {
   const { user, isLoaded } = useUser();
   const { playlists } = useAppSelector((state) => state.playlists);
   const [inputValue, setInputValue] = useState<string>("");
   const [filteredPlaylists, setFilteredPlaylists] = useState<Playlist[]>([]);

   useEffect(() => {
      if (!playlists) {
         setFilteredPlaylists([]);
         return;
      }
      const founded = playlists.filter(({ name }) =>
         name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()),
      );
      setFilteredPlaylists(founded);
   }, [inputValue, playlists]);
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
         <div className="fixed top-20 left-0 px-32 z-10 w-full h-64 flex items-center justify-between">
            <PageTitle title="Playlists" />
            <ListFinder
               onChange={(e) => setInputValue(e.currentTarget.value)}
               value={inputValue}
            />
            <CreatePlaylistButton />
         </div>
         <div className="w-full mt-64">
            {playlists.length === 0 ? (
               <NoListsMessage text="this is so empty... Create list to save movies and series" />
            ) : filteredPlaylists.length > 0 ? (
               <div className="grid w-full xl:grid-cols-2 gap-4">
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
