import useListsRefresh from "@/common/hooks/useListsRefresh";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

type Props = {};

export default function GetPlaylists({}: Props) {
   const dispatch = useAppDispatch();

   const { user, isLoaded } = useUser();
   const { refreshLists } = useListsRefresh();
   useEffect(() => {
      refreshLists();
   }, [isLoaded, dispatch, user]);
   return <></>;
}
