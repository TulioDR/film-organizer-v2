import { useEffect, useState } from "react";
import { getListById } from "@/api/lists";
import ListModel from "@/models/ListModel";

export default function useListData(list_id: string) {
   const [list, setList] = useState<ListModel | null>(null);

   useEffect(() => {
      const getMediaListData = async () => {
         const { data } = await getListById(list_id);
         setList(data);
      };
      getMediaListData();
   }, [list_id]);

   return { list };
}
