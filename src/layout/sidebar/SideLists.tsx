import { useSelector } from "react-redux";
import SideLink from "./SideLink";
import SideNoListsMessage from "./SideNoListsMessage";
import StoreModel from "@/models/StoreModel";

export default function SideLists() {
   const { lists } = useSelector((state: StoreModel) => state.lists);

   if (lists?.length <= 0) return <SideNoListsMessage />;
   return (
      <>
         {lists.map((list: any) => (
            <SideLink
               key={list.id}
               link={`/lists/${list.id}`}
               icon="featured_play_list"
               text={list.name}
            />
         ))}
      </>
   );
}
