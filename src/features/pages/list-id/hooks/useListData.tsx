import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import List from "@/common/models/List";
import Store from "@/common/models/Store";

export default function useListData(list_id: string) {
   const [list, setList] = useState<List | null>(null);
   const { lists } = useSelector((state: Store) => state.lists);

   useEffect(() => {
      const getMediaListData = async () => {
         if (!lists) return;
         const currentList = lists.find((list) => list.id === list.id);
         if (currentList) setList(currentList);
      };
      getMediaListData();
   }, [list_id, lists]);

   return { list };
}
