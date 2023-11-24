import React from "react";
import DropDown from "../Dropdown";

import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import genres from "../../../../images/genres.jpg";
import GenreModel from "@/features/pages/genres/models/GenreModel";
import { OptionModel } from "@/features/pages/discover/models/DiscoverModel";

type Props = {
   isMovie: boolean;
};

export default function GenresDd({ isMovie }: Props) {
   const getGenresOptions = (array: GenreModel[]) => {
      let options: OptionModel[] = [];
      options.push({ value: "", label: "All genres" });
      array.forEach((genre) => {
         options.push({ value: genre.id, label: genre.name });
      });
      return options;
   };
   const movieGenresOptions: OptionModel[] = getGenresOptions(movieGenres);
   const tvGenresOptions: OptionModel[] = getGenresOptions(tvGenres);
   return (
      <DropDown
         name="with_genres"
         title="Genres"
         options={isMovie ? movieGenresOptions : tvGenresOptions}
         icon="theater_comedy"
         image={genres}
      />
   );
}
