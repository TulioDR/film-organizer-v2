import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import React, { useEffect } from "react";
import GenreCardModal from "@/features/pages/genres/components/GenreCardModal";
import { MediaGenre } from "@/features/pages/media-type/models/Filters";

type Props = {
   mediaType: "movie" | "tv";
};

export default function GenresSelector({ mediaType }: Props) {
   const [genres, setGenres] = React.useState<MediaGenre[]>([]);

   const isMovie = mediaType === "movie";

   useEffect(() => {
      const currentGenres = isMovie ? movieGenres : tvGenres;
      console.log(currentGenres.length);
      setGenres(currentGenres);
   }, [isMovie]);
   return (
      <div
         className={`w-full h-full bg-gray-200 pointer-events-auto rounded-lg p-4 grid grid-cols-4  
            ${isMovie ? "grid-rows-5" : "grid-rows-4"}
         `}
      >
         {genres.map((genre, index) => (
            <GenreCardModal key={index} genre={genre} mediaType={mediaType} />
         ))}
      </div>
   );
}
