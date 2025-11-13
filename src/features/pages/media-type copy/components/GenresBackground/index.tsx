import Poster from "@/common/components/Poster";
import GenreModel from "@/features/pages/genres/models/GenreModel";
import React from "react";

type Props = {
   genres: GenreModel[];
};

export default function GenresBackground({ genres }: Props) {
   const displayedGenres = (originalArray: any[]) => {
      return [...originalArray].sort(() => 0.5 - Math.random()).slice(0, 4);
   };

   return (
      <div className="w-full h-full grid grid-cols-2 grid-rows-2">
         {displayedGenres(genres).map((genre) => (
            <div key={genre.id} className="w-full h-full relative">
               <Poster alt={genre.name} posterPath={genre.image} size="sm" />
            </div>
         ))}
      </div>
   );
}
