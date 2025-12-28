import React from "react";
import DropDown from "../Dropdown";

import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import {
   MediaGenre,
   SelectOption,
} from "@/features/pages/media-type/models/Filters";

type Props = {
   isMovie: boolean;
};

export default function GenresDd({ isMovie }: Props) {
   const getGenresOptions = (array: MediaGenre[]) => {
      let options: SelectOption[] = [];
      options.push({ value: "", label: "All genres" });
      array.forEach((genre) => {
         options.push({ value: genre.id, label: genre.name });
      });
      return options;
   };
   const movieGenresOptions: SelectOption[] = getGenresOptions(movieGenres);
   const tvGenresOptions: SelectOption[] = getGenresOptions(tvGenres);
   return (
      <DropDown
         name="with_genres"
         title="Genres"
         options={isMovie ? movieGenresOptions : tvGenresOptions}
         icon="theater_comedy"
      />
   );
}
