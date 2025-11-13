import React from "react";
import FilterCard from "../../FilterCard";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreSelector from "./GenreSelector";

type Props = {
   isMovie: boolean;
   exclude?: true;
};

export default function GenresFilter({ isMovie, exclude }: Props) {
   const genres = isMovie ? movieGenres : tvGenres;

   return (
      <FilterCard
         wide
         name={exclude ? "Exclude genres" : "Include genres"}
         message="Multiple can be selected"
      >
         <div className="grid grid-cols-5 w-full">
            {genres.map((genre) => (
               <GenreSelector key={genre.id} name={genre.name} />
            ))}
         </div>
      </FilterCard>
   );
}
