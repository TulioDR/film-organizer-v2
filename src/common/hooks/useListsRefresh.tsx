import useAppDispatch from "@/store/hooks/useAppDispatch";
import { useUser } from "@clerk/nextjs";
import { getAllPlaylists } from "@/api/playlists";
import { playlistsActions } from "@/store/slices/playlist-slice";

export default function useListsRefresh() {
   const { user } = useUser();
   const dispatch = useAppDispatch();

   const refreshLists = async () => {
      if (!user) {
         dispatch(playlistsActions.setPlaylists(null));
         return;
      }
      const { data } = await getAllPlaylists();
      dispatch(playlistsActions.setPlaylists(data));
      return data;
   };

   return { refreshLists };
}
