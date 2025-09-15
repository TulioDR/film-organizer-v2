import { useEffect, useState } from "react";
import List from "@/common/models/List";
import useAppSelector from "@/store/hooks/useAppSelector";

export default function useListData(list_id: string) {
   const [list, setList] = useState<List | null>(null);
   const { lists } = useAppSelector((state) => state.lists);

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
