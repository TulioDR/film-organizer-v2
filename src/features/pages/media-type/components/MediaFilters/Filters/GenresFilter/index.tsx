import React from "react";
import FilterCard from "../../FilterCard";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreSelector from "./GenreSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import GenresFilterGrid from "./GenresFilterGrid";
import ExcludeIcon from "./ExcludeIcon";
import { GENRES_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {
   exclude?: true;
   small?: true;
};

export default function GenresFilter({ exclude, small }: Props) {
   const { mediaType, genresInc, genresExc, toggleIncluded, toggleExcluded } =
      useMediaFilterContext();
   const isMovie = mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;

   return (
      <FilterCard
         icon={exclude ? <ExcludeIcon /> : GENRES_ICON}
         name={`${exclude ? "Exclude" : "Include"} genres`}
      >
         <GenresFilterGrid small={small}>
            {genres.map((genre) => (
               <GenreSelector
                  key={genre.id}
                  name={genre.name}
                  onClick={
                     exclude
                        ? () => toggleExcluded(genre)
                        : () => toggleIncluded(genre)
                  }
                  isSelected={
                     exclude
                        ? genresExc.some((g) => g.id === genre.id)
                        : genresInc.some((g) => g.id === genre.id)
                  }
               />
            ))}
         </GenresFilterGrid>
      </FilterCard>
   );
}
