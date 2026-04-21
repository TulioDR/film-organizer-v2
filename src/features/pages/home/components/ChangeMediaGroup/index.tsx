import useHomeContext from "../../context/HomeContext";
import GroupButton from "./GroupButton";

type Props = {};

export default function ChangeMediaGroup({}: Props) {
   const { allGroups, currentGroup, changeMediaGroup, stopAutoPlay } =
      useHomeContext();

   const handleClick = (index: number) => {
      changeMediaGroup(index);
      stopAutoPlay();
   };

   return (
      <div className="w-full h-16 flex gap-4">
         {allGroups.map((group, index) => (
            <GroupButton
               key={group.id}
               onClick={() => handleClick(index)}
               isSelected={currentGroup.id === group.id}
               text={group.name}
            />
         ))}
      </div>
   );
}
