import React from "react";
import ChangeButton from "./ChangeButton";
import MediaGroup from "../../models/MediaGroup";

type Props = {
   data: [MediaGroup, MediaGroup, MediaGroup];
   mediaGroup: MediaGroup;
   changeMediaGroup: (newMediagroup: MediaGroup) => void;
};

export default function ChangeMediaGroup({
   data,
   mediaGroup,
   changeMediaGroup,
}: Props) {
   return (
      <div className="h-16 flex gap-4 w-full">
         {data.map((group) => (
            <ChangeButton
               key={group.id}
               onClick={() => changeMediaGroup(group)}
               isSelected={mediaGroup.id === group.id}
               src={group.media[0].backdrop_path}
               text={group.name}
            />
         ))}
      </div>
   );
}
