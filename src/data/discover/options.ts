import { OptionModel } from "../../models/DiscoverModel";
import GenreModel from "../../models/genresModel";
import movieGenres from "../genres/movieGenres";
import tvGenres from "../genres/tvGenres";

console.log("hello");
const getGenresOptions = (array: GenreModel[]) => {
   let options: OptionModel[] = [];
   options.push({ value: "", label: "All genres" });
   array.forEach((genre) => {
      options.push({ value: genre.id, label: genre.name });
   });
   return options;
};
export const movieGenresOptions: OptionModel[] = getGenresOptions(movieGenres);
export const tvGenresOptions: OptionModel[] = getGenresOptions(tvGenres);

export let releaseYears: OptionModel[] = [{ label: "Any year", value: "" }];
const year = new Date().getFullYear();
for (let i = year + 5; i >= 1950; i--) {
   releaseYears.push({ label: i, value: i });
}

export const ratings: OptionModel[] = [
   { value: "", label: "Any Rating" },
   { value: 9, label: "9+" },
   { value: 8, label: "8+" },
   { value: 7, label: "7+" },
   { value: 6, label: "6+" },
   { value: 5, label: "5+" },
   { value: 4, label: "4+" },
   { value: 3, label: "3+" },
   { value: 2, label: "2+" },
   { value: 1, label: "1+" },
];

export const sortByMovie: OptionModel[] = [
   { label: "Popularity Descending", value: "popularity.desc" },
   { label: "Popularity Ascending", value: "popularity.asc" },
   { label: "Release Date Descending", value: "release_date.desc" },
   { label: "Release Date Ascending", value: "release_date.asc" },
   { label: "Rating Descending", value: "vote_average.desc" },
   { label: "Rating Ascending", value: "vote_average.asc" },
   { label: "Title Descending", value: "original_title.desc" },
   { label: "Title Ascending", value: "original_title.asc" },
];
export const sortByTv: OptionModel[] = [
   { label: "Popularity Descending", value: "popularity.desc" },
   { label: "Popularity Ascending", value: "popularity.asc" },
   { label: "First Air Date Descending", value: "first_air_date.desc" },
   { label: "First Air Date Ascending", value: "first_air_date.asc" },
   { label: "Rating Descending", value: "vote_average.desc" },
   { label: "Rating Ascending", value: "vote_average.asc" },
];
