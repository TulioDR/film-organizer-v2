import { useRouter } from "next/router";
import useMediaFilterContext from "../context/MediaFilterContext";

export default function useMediaSearch() {
   const router = useRouter();
   const { state } = useMediaFilterContext();

   const handleSearchButton = () => {
      const { mediaType, sortBy, minRated, maxRated, dateRange } = state;
      const { genresInc, genresExc, minDuration, maxDuration } = state;
      const { language, country } = state;

      const isMovie = mediaType === "movie";

      let path = `/${mediaType === "movie" ? "movie" : "tv"}`;
      const params = new URLSearchParams();

      // 2. Sorting
      params.append("sort_by", sortBy.value.toString());
      // 3. Ratings (Vote Average)
      params.append("vote_average.gte", minRated.toString());
      params.append("vote_average.lte", maxRated.toString());
      // 4. Genres (Included = comma separated, Excluded = comma separated)
      if (genresInc.length > 0)
         params.append("with_genres", genresInc.map((g) => g.id).join(","));
      if (genresExc.length > 0)
         params.append("without_genres", genresExc.map((g) => g.id).join(","));
      // 5. Date Range
      // Movies use 'primary_release_date', TV uses 'first_air_date'
      const dateKeyGte = isMovie
         ? "primary_release_date.gte"
         : "first_air_date.gte";
      const dateKeyLte = isMovie
         ? "primary_release_date.lte"
         : "first_air_date.lte";

      if (dateRange.startDate) {
         params.append(
            dateKeyGte,
            dateRange.startDate.toISOString().split("T")[0]
         );
      }
      if (dateRange.endDate) {
         params.append(
            dateKeyLte,
            dateRange.endDate.toISOString().split("T")[0]
         );
      }
      // 6. Runtime (Duration)
      params.append("with_runtime.gte", minDuration.toString());
      params.append("with_runtime.lte", maxDuration.toString());

      // 7. Language & Country
      if (language?.value)
         params.append("with_original_language", language.value.toString());
      if (country?.value)
         params.append("with_origin_country", country.value.toString());

      const url = `${path}?${params.toString()}&page=1`;
      console.log(decodeURIComponent(url));
      router.push(decodeURIComponent(url));
   };

   return { handleSearchButton };
}
