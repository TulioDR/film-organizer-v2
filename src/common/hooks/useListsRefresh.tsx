import { getLists } from "@/api/lists";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { listActions } from "@/store/slices/list-slice";
import { useUser } from "@clerk/nextjs";

export default function useListsRefresh() {
   const { user } = useUser();
   const dispatch = useAppDispatch();

   const refreshLists = async () => {
      if (!user) {
         dispatch(listActions.setLists(null));
         return;
      }
      console.log("refresh lists");
      setTimeout(async () => {
         const lists = await getLists(user.id);
         console.log(lists);
         dispatch(listActions.setLists(lists));
      }, 100);
   };

   return { refreshLists };
}
