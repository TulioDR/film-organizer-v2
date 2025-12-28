import React from "react";
import FilterCard from "../../FilterCard";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreSelector from "./GenreSelector";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import GenresFilterGrid from "./GenresFilterGrid";
import ExcludeIcon from "./ExcludeIcon";
import { GENRES_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import { MediaGenre } from "@/features/pages/media-type/models/Filters";

type Props = {
   exclude?: true;
   small?: true;
};

export default function GenresFilter({ exclude, small }: Props) {
   const { state, dispatch } = useMediaFilterContext();
   const isMovie = state.mediaType === "movie";
   const genres = isMovie ? movieGenres : tvGenres;

   const toggleExcluded = (genre: MediaGenre) => {
      dispatch({ type: "TOGGLE_GENRE_EXC", payload: genre });
   };
   const toggleIncluded = (genre: MediaGenre) => {
      dispatch({ type: "TOGGLE_GENRE_INC", payload: genre });
   };

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
                        ? state.genresExc.some((g) => g.id === genre.id)
                        : state.genresInc.some((g) => g.id === genre.id)
                  }
               />
            ))}
         </GenresFilterGrid>
      </FilterCard>
   );
}
