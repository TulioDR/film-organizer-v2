import { useUser } from "@supabase/auth-helpers-react";
import { createContext, useContext, useEffect, useState } from "react";
import { getLists } from "../api/lists";
import useRefresh from "../hooks/useRefresh";

interface ListsContextInterface {
   lists: any[];
   isSaveMediaOpen: boolean;
   closeSaveMediaModal: () => void;
   isLoginAdviceOpen: boolean;
   closeLoginAdviceModal: () => void;
   openBookmark: (type: "movie" | "tv", media: any) => void;
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
   const user = useUser();

   const [lists, setLists] = useState<any[]>([]);

   const [isSaveMediaOpen, setIsSaveMediaOpen] = useState<boolean>(false);
   const closeSaveMediaModal = () => setIsSaveMediaOpen(false);

   const [isLoginAdviceOpen, setIsLoginAdviceOpen] = useState<boolean>(false);
   const closeLoginAdviceModal = () => setIsLoginAdviceOpen(false);

   const [currentType, setCurrentType] = useState<"movie" | "tv">("movie");
   const [currentMedia, setCurrentMedia] = useState<any>(null);
   const { search, refresh } = useRefresh();

   const openBookmark = (type: "movie" | "tv", media: any) => {
      if (user) {
         setIsSaveMediaOpen(true);
         setCurrentMedia(media);
         setCurrentType(type);
      } else {
         setIsLoginAdviceOpen(true);
      }
   };

   const [refreshCard, setRefreshCard] = useState<boolean>(true);
   const refreshBookmark = () => setRefreshCard(!refreshCard);

   useEffect(() => {
      const getListsEffect = async () => {
         if (!user) {
            setLists([]);
            return;
         }
         console.log("fetch lists");
         const data = await getLists(user.id);
         setLists(data);
      };
      getListsEffect();
   }, [search, user]);

   const getListsFunction = async () => {
      if (!user) {
         setLists([]);
         return;
      }
      const listsData = await getLists(user.id);
      setLists(listsData);
   };

   const value: ListsContextInterface = {
      lists,
      isSaveMediaOpen,
      closeSaveMediaModal,
      isLoginAdviceOpen,
      closeLoginAdviceModal,
      openBookmark,
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
