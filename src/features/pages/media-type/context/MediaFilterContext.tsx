import { createContext, useContext, useEffect, useState } from "react";
import { OptionModel } from "../models/DiscoverModel";
import GenreModel from "../../genres/models/GenreModel";
import { DateValueType } from "react-tailwindcss-datepicker";
import useGenresFilter from "../hooks/useGenresFilter";
import useRatedFilter from "../hooks/useRatedFilter";
import useDurationFilter from "../hooks/useDurationFilter";
import useFetchedOptions from "../hooks/useFetchedOptions";
import useDateFilter from "../hooks/useDateFilter";
import useSortByFilter from "../hooks/useSortByFilter";

interface ContextInterface {
   mediaType: "movie" | "tv";
   setMediaType: React.Dispatch<React.SetStateAction<"movie" | "tv">>;
   sortBy: OptionModel;
   setSortBy: React.Dispatch<React.SetStateAction<OptionModel>>;
   genresInc: GenreModel[];
   genresExc: GenreModel[];
   toggleIncluded: (genre: GenreModel) => void;
   toggleExcluded: (genre: GenreModel) => void;
   minRated: number;
   maxRated: number;
   setMinRated: React.Dispatch<React.SetStateAction<number>>;
   setMaxRated: React.Dispatch<React.SetStateAction<number>>;
   minDuration: number;
   maxDuration: number;
   setMinDuration: React.Dispatch<React.SetStateAction<number>>;
   setMaxDuration: React.Dispatch<React.SetStateAction<number>>;
   dateRange: DateValueType;
   setDateRange: React.Dispatch<React.SetStateAction<DateValueType>>;
   languagesOptions: OptionModel[];
   language: OptionModel | null;
   setLanguage: React.Dispatch<React.SetStateAction<OptionModel | null>>;
   countriesOptions: OptionModel[];
   country: OptionModel | null;
   setCountry: React.Dispatch<React.SetStateAction<OptionModel | null>>;
   reset: () => void;
}

const MediaFilterContext = createContext({} as ContextInterface);
export default function useMediaFilterContext() {
   return useContext(MediaFilterContext);
}

type Props = { children: React.ReactNode };
export function MediaFilterProvider({ children }: Props) {
   const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");

   const { sortBy, setSortBy, resetSortBy } = useSortByFilter();
   const { dateRange, setDateRange, resetDateRange } = useDateFilter();
   const { minRated, maxRated, resetRated, setMinRated, setMaxRated } =
      useRatedFilter();
   const { genresExc, genresInc, toggleExcluded, toggleIncluded, resetGenres } =
      useGenresFilter();
   const {
      country,
      setCountry,
      language,
      setLanguage,
      languagesOptions,
      countriesOptions,
      resetFetchedOptions,
   } = useFetchedOptions();
   const {
      minDuration,
      maxDuration,
      setMinDuration,
      setMaxDuration,
      resetDuration,
   } = useDurationFilter();

   const reset = () => {
      resetSortBy();
      resetRated();
      resetGenres();
      resetDuration();
      resetDateRange();
      resetFetchedOptions();
   };

   useEffect(() => {
      resetSortBy();
      resetGenres();
   }, [mediaType]);

   const value: ContextInterface = {
      mediaType,
      setMediaType,
      sortBy,
      setSortBy,
      genresInc,
      genresExc,
      toggleIncluded,
      toggleExcluded,
      minRated,
      maxRated,
      setMinRated,
      setMaxRated,
      minDuration,
      maxDuration,
      setMinDuration,
      setMaxDuration,
      dateRange,
      setDateRange,
      languagesOptions,
      language,
      setLanguage,
      countriesOptions,
      country,
      setCountry,
      reset,
   };

   return (
      <MediaFilterContext.Provider value={value}>
         {children}
      </MediaFilterContext.Provider>
   );
}
