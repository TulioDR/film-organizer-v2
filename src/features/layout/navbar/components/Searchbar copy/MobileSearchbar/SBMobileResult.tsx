import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";
import React from "react";

type Props = {
   item: Media;
};

export default function SBMobileResult({ item }: Props) {
   return (
      <div className="w-full flex gap-2 px-2 items-center">
         <div className="w-12 aspect-[2/3]">
            <Poster
               posterPath={item.poster_path}
               alt={(item.name || item.name) + item.id}
               front
               size="sm"
            />
         </div>
         <span className="">{item.title || item.name}</span>
      </div>
   );
}
