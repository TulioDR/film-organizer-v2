import useListsRefresh from "@/common/hooks/useListsRefresh";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

type Props = {};

export default function GetPlaylists({}: Props) {
   const { user, isLoaded } = useUser();
   const { refreshLists } = useListsRefresh();
   useEffect(() => {
      if (!isLoaded) return;
      refreshLists();
   }, [isLoaded, user, refreshLists]);
   return <></>;
}
