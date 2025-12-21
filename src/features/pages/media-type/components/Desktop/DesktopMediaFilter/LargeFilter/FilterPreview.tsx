import React from "react";
import PreviewCard from "./PreviewCard";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import ExcludeIcon from "../../../MediaFilters/Filters/GenresFilter/ExcludeIcon";

type Props = {};

export default function FilterPreview({}: Props) {
   const {
      mediaType,
      sortBy,
      genresInc,
      genresExc,
      minRated,
      maxRated,
      dateRange,
      minDuration,
      maxDuration,
      language,
      country,
   } = useMediaFilterContext();

   return (
      <div className="w-full bg-accent text-white overflow-hidden p-4">
         <div className="w-min grid grid-rows-2 grid-flow-col gap-2">
            <PreviewCard
               permanent
               text={mediaType === "movie" ? "Movies" : "Series"}
               icon={mediaType === "movie" ? "movie" : "tv"}
            />
            <PreviewCard permanent text={sortBy.label} icon={"sort"} />
            {(minRated !== 0 || maxRated !== 10) && (
               <PreviewCard
                  text={`${minRated} - ${maxRated}`}
                  icon={"star_rate"}
               />
            )}
            {genresInc.map((genre) => (
               <PreviewCard
                  key={genre.id}
                  text={genre.name}
                  icon={"theater_comedy"}
               />
            ))}
            {genresExc.map((genre) => (
               <PreviewCard
                  key={genre.id}
                  text={genre.name}
                  icon={<ExcludeIcon />}
               />
            ))}

            {dateRange?.startDate && dateRange?.endDate && (
               <PreviewCard
                  text={`${
                     new Date(dateRange.startDate).toISOString().split("T")[0]
                  } ~ ${
                     new Date(dateRange.endDate).toISOString().split("T")[0]
                  }`}
                  icon="date_range"
               />
            )}
            {(minDuration !== 0 || maxDuration !== 400) && (
               <PreviewCard
                  text={`${minDuration} - ${maxDuration} min`}
                  icon={"timer"}
               />
            )}
            {language && (
               <PreviewCard text={language.label} icon={"translate"} />
            )}
            {country && <PreviewCard text={country.label} icon={"public"} />}
         </div>
      </div>
   );
}
