import { SelectOption } from "../models/Filters";

const SORT_BY_MOVIE: SelectOption[] = [
   { label: "Popularity Descending", value: "popularity.desc" },
   { label: "Popularity Ascending", value: "popularity.asc" },
   { label: "Release Date Descending", value: "release_date.desc" },
   { label: "Release Date Ascending", value: "release_date.asc" },
   { label: "Rating Descending", value: "vote_average.desc" },
   { label: "Rating Ascending", value: "vote_average.asc" },
   { label: "Title Descending", value: "original_title.desc" },
   { label: "Title Ascending", value: "original_title.asc" },
];
const SORT_BY_TV: SelectOption[] = [
   { label: "Popularity Descending", value: "popularity.desc" },
   { label: "Popularity Ascending", value: "popularity.asc" },
   { label: "First Air Date Descending", value: "first_air_date.desc" },
   { label: "First Air Date Ascending", value: "first_air_date.asc" },
   { label: "Rating Descending", value: "vote_average.desc" },
   { label: "Rating Ascending", value: "vote_average.asc" },
];

export { SORT_BY_MOVIE, SORT_BY_TV };
