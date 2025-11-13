import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";
import React from "react";

type Props = {
   media: Media;
};

export default function SelectorBackground({ media }: Props) {
   return (
      <Poster
         posterPath={media.backdrop_path}
         alt={media.name || media.title}
         size="xl"
      />
   );
}
