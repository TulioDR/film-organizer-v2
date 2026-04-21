import useAppDispatch from "@/store/hooks/useAppDispatch";
import { useUser } from "@clerk/nextjs";
import { getAllPlaylists } from "@/api/playlists";
import { playlistsActions } from "@/store/slices/playlist-slice";
import Playlist from "../models/Playlist";

export default function useListsRefresh() {
   const { user } = useUser();
   const dispatch = useAppDispatch();

   const refreshLists = async () => {
      if (!user) {
         dispatch(playlistsActions.setPlaylists(null));
         return;
      }
      const playlists: Playlist[] = await getAllPlaylists();
      dispatch(playlistsActions.setPlaylists(playlists));
      return playlists;
   };

   return { refreshLists };
}
