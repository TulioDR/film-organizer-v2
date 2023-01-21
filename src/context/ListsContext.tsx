import { useUser } from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";
import { getLists } from "../api/lists";
import useRefresh from "../hooks/useRefresh";

interface ListsContextInterface {
   lists: any[];
   isSaveMediaOpen: boolean;
   openSaveMediaModal: (type: "movie" | "tv", media: any) => void;
   closeSaveMediaModal: () => void;
   currentType: "movie" | "tv";
   currentMedia: any;
   refresh: () => void;
   refreshBookmark: () => void;
   refreshCard: boolean;
}

const ListsContext = createContext({} as ListsContextInterface);
export default function useListsContext() {
   return useContext(ListsContext);
}

interface Props {
   children: React.ReactNode;
}
export function ListsProvider({ children }: Props) {
   const [lists, setLists] = useState<any[]>([]);
   const [isSaveMediaOpen, setIsSaveMediaOpen] = useState<boolean>(false);

   const [currentType, setCurrentType] = useState<"movie" | "tv">("movie");
   const [currentMedia, setCurrentMedia] = useState<any>(null);
   const { search, refresh } = useRefresh();

   const [refreshCard, setRefreshCard] = useState<boolean>(true);
   const refreshBookmark = () => setRefreshCard(!refreshCard);

   const openSaveMediaModal = (type: "movie" | "tv", media: any) => {
      setIsSaveMediaOpen(true);
      setCurrentMedia(media);
      setCurrentType(type);
   };
   const closeSaveMediaModal = () => {
      setIsSaveMediaOpen(false);
   };

   const user = useUser();
   useEffect(() => {
      const getListsItems = async () => {
         if (!user) {
            setLists([]);
            return;
         }
         console.log("fetch lists");
         const data = await getLists(user.id);
         setLists(data);
      };
      getListsItems();
   }, [search, user]);

   const value: ListsContextInterface = {
      lists,
      isSaveMediaOpen,
      openSaveMediaModal,
      closeSaveMediaModal,
      currentType,
      currentMedia,
      refresh,
      refreshBookmark,
      refreshCard,
   };
   return (
      <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
   );
}
