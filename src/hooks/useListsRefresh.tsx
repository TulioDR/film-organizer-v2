import { getLists } from "@/api/lists";
import { listActions } from "@/store/slices/list-slice";
import { useUser } from "@supabase/auth-helpers-react";
import { useDispatch } from "react-redux";

export default function useListsRefresh() {
   const user = useUser();
   const dispatch = useDispatch();

   const refreshLists = async () => {
      if (!user) {
         dispatch(listActions.setLists([]));
         return;
      }
      console.log("refresh lists");
      const lists = await getLists(user.id);
      dispatch(listActions.setLists(lists));
   };

   return { refreshLists };
}
