import React from "react";
import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";

type Props = {
   media: Media;
};

export default function Front({ media }: Props) {
   return (
      <div className="relative [backface-visibility:hidden] overflow-hidden shadow-xl rounded-sm">
         <Poster
            alt={media.name || media.title}
            posterPath={media.poster_path}
            front
         />
      </div>
   );
}
