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
import { MediaGenre } from "../models/Filters";

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
   const { state, dispatch } = ctx;
   const { minRated, maxRated, minDuration, maxDuration } = state;
   const { language, country } = state;

   const formatDate = (date: Date) => {
      return new Date(date).toISOString().split("T")[0];
   };

   const isMovie = state.mediaType === "movie";

   const ratingCondition =
      minRated !== RATING_GLOBAL_MIN || maxRated !== RATING_GLOBAL_MAX;

   const startDate = state.dateRange?.startDate;
   const endDate = state.dateRange?.endDate;
   const dateCondition = !!(startDate && endDate);

   const durationCondition =
      minDuration !== DURATION_GLOBAL_MIN ||
      maxDuration !== DURATION_GLOBAL_MAX;

   const rules: PreviewInterface[] = [
      {
         condition: () => true,
         id: "mediaType",
         text: isMovie ? "Movies" : "Series",
         icon: isMovie ? MOVIE_ICON : TV_ICON,
      },
      {
         condition: () => true,
         id: "sort",
         text: state.sortBy.label,
         icon: SORT_BY_ICON,
      },
      {
         condition: () => ratingCondition,
         id: "rating",
         text: `${minRated} ~ ${maxRated}`,
         icon: RATING_ICON,
         onRemove: () => {
            dispatch({
               type: "SET_RATING",
               payload: [RATING_GLOBAL_MIN, RATING_GLOBAL_MAX],
            });
         },
      },
      ...state.genresInc.map((g: MediaGenre) => ({
         condition: () => true,
         id: `inc-${g.id}`,
         text: g.name,
         icon: GENRES_ICON,
         onRemove: () => dispatch({ type: "TOGGLE_GENRE_INC", payload: g }),
      })),
      ...state.genresExc.map((g: MediaGenre) => ({
         condition: () => true,
         id: `exc-${g.id}`,
         text: g.name,
         icon: <ExcludeIcon />,
         onRemove: () => dispatch({ type: "TOGGLE_GENRE_EXC", payload: g }),
      })),
      {
         condition: () => dateCondition,
         id: "date",
         text: `${formatDate(startDate!)} ~ ${formatDate(endDate!)}`,
         icon: RELEASE_DATE_ICON,
         onRemove: () =>
            dispatch({
               type: "SET_DATES",
               payload: { startDate: null, endDate: null },
            }),
      },
      {
         condition: () => durationCondition,
         id: "duration",
         text: `${minDuration} ~ ${maxDuration}`,
         icon: RATING_ICON,
         onRemove: () => {
            dispatch({
               type: "SET_DURATION",
               payload: [DURATION_GLOBAL_MIN, DURATION_GLOBAL_MAX],
            });
         },
      },
      {
         condition: () => !!language,
         id: "lang",
         text: language?.label!,
         icon: ORIGINAL_LANGUAGE_ICON,
         onRemove: () => dispatch({ type: "SET_LANGUAGE", payload: null }),
      },
      {
         condition: () => !!country,
         id: "country",
         text: country?.label!,
         icon: ORIGIN_COUNTRY_ICON,
         onRemove: () => dispatch({ type: "SET_COUNTRY", payload: null }),
      },
   ];

   return rules.filter((filter) => filter.condition());
}
