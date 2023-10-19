import { OptionModel } from "@/models/DiscoverModel";
import DropDown from "../Dropdown";
import sortImage from "@/data/discover/images/sort.jpeg";

type Props = {
   isMovie: boolean;
};

export default function SortByDd({ isMovie }: Props) {
   const sortByMovie: OptionModel[] = [
      { label: "Popularity Descending", value: "popularity.desc" },
      { label: "Popularity Ascending", value: "popularity.asc" },
      { label: "Release Date Descending", value: "release_date.desc" },
      { label: "Release Date Ascending", value: "release_date.asc" },
      { label: "Rating Descending", value: "vote_average.desc" },
      { label: "Rating Ascending", value: "vote_average.asc" },
      { label: "Title Descending", value: "original_title.desc" },
      { label: "Title Ascending", value: "original_title.asc" },
   ];
   const sortByTv: OptionModel[] = [
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
         image={sortImage}
      />
   );
}
