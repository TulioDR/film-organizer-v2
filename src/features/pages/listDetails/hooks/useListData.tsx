import { useEffect, useState } from "react";
import ListModel from "@/models/ListModel";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

export default function useListData(list_id: string) {
   const [list, setList] = useState<ListModel | null>(null);
   const { lists } = useSelector((state: StoreModel) => state.lists);

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
