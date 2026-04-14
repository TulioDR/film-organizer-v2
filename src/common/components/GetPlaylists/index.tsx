import { getPlaylists } from "@/api/playlists";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { playlistsActions } from "@/store/slices/playlist-slice";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

type Props = {};

export default function GetPlaylists({}: Props) {
   const dispatch = useAppDispatch();

   const { user, isLoaded } = useUser();

   useEffect(() => {
      const getInitialPLaylists = async () => {
         if (isLoaded && user) {
            const data = await getPlaylists();
            console.log(data);
            dispatch(playlistsActions.setPlaylists(data));
         }
      };
      getInitialPLaylists();
   }, [isLoaded, isLoaded]);
   return <></>;
}
