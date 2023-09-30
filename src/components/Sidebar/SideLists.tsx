import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";
import SideItem from "./SideItem";

type Props = {};

export default function SideLists({}: Props) {
   const { lists } = useSelector((state: StoreModel) => state.lists);

   return (
      <div className="space-y-2">
         {lists!.map((list) => (
            <SideItem
               key={list.id}
               link={`/lists/${list.id}`}
               icon="featured_play_list"
               text={list.name}
            />
         ))}
      </div>
   );
}
