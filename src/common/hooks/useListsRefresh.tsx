import useAppDispatch from "@/store/hooks/useAppDispatch";
import { useUser } from "@clerk/nextjs";
import { getUserPlaylists } from "@/api/playlists";
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
      console.log("refresh lists");
      setTimeout(async () => {
         const lists: Playlist[] = await getUserPlaylists(false);
         console.log(lists);
         dispatch(playlistsActions.setPlaylists(lists));
      }, 100);
   };

   return { refreshLists };
}
