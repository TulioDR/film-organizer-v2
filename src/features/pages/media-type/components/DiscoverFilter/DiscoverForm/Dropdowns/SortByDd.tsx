import { SelectOption } from "@/features/pages/media-type/models/Filters";
import DropDown from "../Dropdown";

type Props = {
   isMovie: boolean;
};

export default function SortByDd({ isMovie }: Props) {
   const sortByMovie: SelectOption[] = [
      { label: "Popularity Descending", value: "popularity.desc" },
      { label: "Popularity Ascending", value: "popularity.asc" },
      { label: "Release Date Descending", value: "release_date.desc" },
      { label: "Release Date Ascending", value: "release_date.asc" },
      { label: "Rating Descending", value: "vote_average.desc" },
      { label: "Rating Ascending", value: "vote_average.asc" },
      { label: "Title Descending", value: "original_title.desc" },
      { label: "Title Ascending", value: "original_title.asc" },
   ];
   const sortByTv: SelectOption[] = [
      { label: "Popularity Descending", value: "popularity.desc" },
      { label: "Popularity Ascending", value: "popularity.asc" },
      { label: "First Air Date Descending", value: "first_air_date.desc" },
      { label: "First Air Date Ascending", value: "first_air_date.asc" },
      { label: "Rating Descending", value: "vote_average.desc" },
      { label: "Rating Ascending", value: "vote_average.asc" },
   ];
   return (
      <DropDown
         name="sort_by"
         title="Sort By"
         options={isMovie ? sortByMovie : sortByTv}
         icon="sort"
      />
   );
}
