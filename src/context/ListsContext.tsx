import { createContext, useContext, useEffect, useState } from "react";
import { getLists } from "../actions/lists";

interface ListsContextInterface {
   lists: any[];
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

   useEffect(() => {
      const getListsItems = async () => {
         const data = await getLists();
         setLists(data);
      };
      getListsItems();
   }, []);

   const value: ListsContextInterface = {
      lists,
   };
   return (
      <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
   );
}
