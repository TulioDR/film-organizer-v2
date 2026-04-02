import React from "react";
import useHomeContext from "../../context/HomeContext";
import GroupButton from "./GroupButton";
import MediaGroup from "../../models/MediaGroup";

type Props = {};

export default function ChangeMediaGroup({}: Props) {
   const { allGroups, mediaGroup, changeMediaGroup, stopAutoPlay } =
      useHomeContext();

   const handleClick = (group: MediaGroup) => {
      changeMediaGroup(group);
      stopAutoPlay();
   };

   return (
      <div className="w-full h-16 flex gap-4">
         {allGroups.map((group) => (
            <GroupButton
               key={group.id}
               onClick={() => handleClick(group)}
               isSelected={mediaGroup.id === group.id}
               text={group.name}
            />
         ))}
      </div>
   );
}
