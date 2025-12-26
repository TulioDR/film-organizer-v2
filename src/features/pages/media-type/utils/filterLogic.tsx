import GenreModel from "../../genres/models/GenreModel";
import ExcludeIcon from "../components/MediaFilters/Filters/GenresFilter/ExcludeIcon";
import {
   DURATION_GLOBAL_MAX,
   DURATION_GLOBAL_MIN,
   RATING_GLOBAL_MAX,
   RATING_GLOBAL_MIN,
} from "../constants/FILTER_GLOBAL_RANGE";
import {
   GENRES_ICON,
   MOVIE_ICON,
   ORIGIN_COUNTRY_ICON,
   ORIGINAL_LANGUAGE_ICON,
   RATING_ICON,
   RELEASE_DATE_ICON,
   SORT_BY_ICON,
   TV_ICON,
} from "../constants/FILTER_ICONS";
import { MediaFilterContextInterface } from "../context/MediaFilterContext";

export interface PreviewInterface {
   condition: () => boolean;
   id: string;
   text: string;
   icon: string | React.ReactNode;
   onRemove?: () => void;
}

export default function filterLogic(
   ctx: MediaFilterContextInterface
): PreviewInterface[] {
   const {
      mediaType,
      minRated,
      maxRated,
      dateRange,
      minDuration,
      maxDuration,
      language,
      country,
   } = ctx;

   const formatDate = (date: Date) => {
      return new Date(date).toISOString().split("T")[0];
   };

   const ratingCondition =
      minRated !== RATING_GLOBAL_MIN || maxRated !== RATING_GLOBAL_MAX;

   const startDate = dateRange?.startDate;
   const endDate = dateRange?.endDate;
   const dateCondition = !!(startDate && endDate);

   const durationCondition =
      minDuration !== DURATION_GLOBAL_MIN ||
      maxDuration !== DURATION_GLOBAL_MAX;

   const rules: PreviewInterface[] = [
      {
         condition: () => true,
         id: "mediaType",
         text: mediaType === "movie" ? "Movies" : "Series",
         icon: mediaType === "movie" ? MOVIE_ICON : TV_ICON,
      },
      {
         condition: () => true,
         id: "sort",
         text: ctx.sortBy.label,
         icon: SORT_BY_ICON,
      },
      {
         condition: () => ratingCondition,
         id: "rating",
         text: `${minRated} ~ ${maxRated}`,
         icon: RATING_ICON,
         onRemove: () => {
            ctx.setMinRated(RATING_GLOBAL_MIN);
            ctx.setMaxRated(RATING_GLOBAL_MAX);
         },
      },
      ...ctx.genresInc.map((g: GenreModel) => ({
         condition: () => true,
         id: `inc-${g.id}`,
         text: g.name,
         icon: GENRES_ICON,
         onRemove: () => ctx.toggleIncluded(g),
      })),
      ...ctx.genresExc.map((g: GenreModel) => ({
         condition: () => true,
         id: `exc-${g.id}`,
         text: g.name,
         icon: <ExcludeIcon />,
         onRemove: () => ctx.toggleExcluded(g),
      })),
      {
         condition: () => dateCondition,
         id: "date",
         text: `${formatDate(startDate!)} ~ ${formatDate(endDate!)}`,
         icon: RELEASE_DATE_ICON,
         onRemove: () => ctx.resetDateRange(),
      },
      {
         condition: () => durationCondition,
         id: "duration",
         text: `${minDuration} ~ ${maxDuration}`,
         icon: RATING_ICON,
         onRemove: () => {
            ctx.setMinDuration(DURATION_GLOBAL_MIN);
            ctx.setMaxDuration(DURATION_GLOBAL_MAX);
         },
      },
      {
         condition: () => !!language,
         id: "lang",
         text: language?.label!,
         icon: ORIGINAL_LANGUAGE_ICON,
         onRemove: () => ctx.setLanguage(null),
      },
      {
         condition: () => !!country,
         id: "country",
         text: country?.label!,
         icon: ORIGIN_COUNTRY_ICON,
         onRemove: () => ctx.setCountry(null),
      },
   ];

   return rules.filter((filter) => filter.condition());
}
