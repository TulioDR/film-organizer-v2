import { useEffect, useState } from "react";
import { getSpecificList } from "@/api/lists";
import ListModel from "@/models/listModel";

export default function useListData(list_id: string) {
   const [list, setList] = useState<ListModel | null>(null);

   useEffect(() => {
      const getMediaListData = async () => {
         const { data } = await getSpecificList(list_id);
         setList(data);
      };
      getMediaListData();
   }, [list_id]);

   return { list };
}
