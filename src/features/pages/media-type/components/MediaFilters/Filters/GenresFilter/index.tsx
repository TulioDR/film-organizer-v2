import React from "react";
import FilterCard from "../../FilterCard";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreSelector from "./GenreSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";

type Props = {
   exclude?: true;
   small?: true;
};

export default function GenresFilter({ exclude, small }: Props) {
   const { mediaType } = useMediaFilterContext();
   const isMovie = mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;

   return (
      <FilterCard
         name={`${exclude ? "Exclude" : "Include"} genres`}
         message="Multiple can be selected"
      >
         <div
            className={`grid w-full gap-2
            ${
               small
                  ? "grid-cols-2"
                  : "grid-cols-3 2xl:grid-cols-4 grid-rows-7 2xl:grid-rows-5"
            }   
         `}
         >
            {genres.map((genre) => (
               <GenreSelector key={genre.id} name={genre.name} />
            ))}
         </div>
      </FilterCard>
   );
}
