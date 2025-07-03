import React from "react";
import Poster from "@/components/Poster";
import { MediaModel } from "@/models/MediaModel";

type Props = {
   media: MediaModel;
};

export default function Front({ media }: Props) {
   return (
      <div className="relative [backface-visibility:hidden] overflow-hidden shadow-xl">
         <Poster
            alt={media.name || media.title}
            posterPath={media.poster_path}
            size="lg"
         />
      </div>
   );
}
