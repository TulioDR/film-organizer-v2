import { createContext, useContext, useEffect, useState } from "react";
import { getLists } from "../actions/lists";
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
      setCurrentMedia(null);
   };

   useEffect(() => {
      const getListsItems = async () => {
         const data = await getLists();
         setLists(data);
      };
      getListsItems();
   }, [search]);

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
