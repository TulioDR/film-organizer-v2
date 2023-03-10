import { useState } from "react";
import { OptionModel } from "../models/DiscoverModel";

export default function useDropDownValues() {
   const [isMovie, setIsMovie] = useState<boolean>(true);
   const toggle = () => {
      setIsMovie(!isMovie);
      setGenre({ value: "", label: "All genres" });
      setSortBy({
         value: "popularity.desc",
         label: "Popularity Descending",
      });
   };

   const [language, setLanguage] = useState<OptionModel>({
      value: "en",
      label: "English",
   });
   const [genre, setGenre] = useState<OptionModel>({
      value: "",
      label: "All genres",
   });
   const [year, setYear] = useState<OptionModel>({
      value: "",
      label: "Any year",
   });
   const [rating, setRating] = useState<OptionModel>({
      value: "",
      label: "Any rating",
   });
   const [sortBy, setSortBy] = useState<OptionModel>({
      value: "popularity.desc",
      label: "Popularity Descending",
   });

   return {
      isMovie,
      toggle,
      language,
      setLanguage,
      genre,
      setGenre,
      year,
      setYear,
      rating,
      setRating,
      sortBy,
      setSortBy,
   };
}
