import ImageLink from "@/common/components/ImageLink";
import Poster from "@/common/components/Poster";
import React from "react";
import GenreName from "../GenreCard/GenreName";
import GenreModel from "../../models/GenreModel";

type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

export default function GenreCardModal({ genre, mediaType }: Props) {
   return (
      <ImageLink
         link={`/${mediaType}/genres/${genre.id}`}
         background={
            <Poster size="sm" alt={genre.name} posterPath={genre.image} />
         }
         front={<GenreName name={genre.name} />}
         className="w-full h-full"
         fullFront
      />
   );
}
