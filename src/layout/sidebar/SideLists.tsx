import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import SideLink from "./SideLink";

type Props = {};

export default function SideLists({}: Props) {
   const { lists } = useSelector((state: StoreModel) => state.lists);

   return (
      <>
         {lists!.map((list) => (
            <SideLink
               key={list.id}
               link={`/lists/${list.id}`}
               icon="featured_play_list"
               text={list.name}
               list
            />
         ))}
      </>
   );
}
