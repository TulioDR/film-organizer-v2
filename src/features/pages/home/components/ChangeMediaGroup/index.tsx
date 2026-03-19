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
      <div className="h-16 flex gap-4 w-full">
         {allGroups.map((group) => (
            <GroupButton
               key={group.id}
               onClick={() => handleClick(group)}
               isSelected={mediaGroup.id === group.id}
               src={group.media[0].backdrop_path}
               text={group.name}
            />
         ))}
      </div>
   );
}
