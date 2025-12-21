import { useState } from "react";
import GenreModel from "../../genres/models/GenreModel";

export default function useGenresFilter() {
   const [genresInc, setGenresInc] = useState<GenreModel[]>([]);
   const [genresExc, setGenresExc] = useState<GenreModel[]>([]);

   const toggleIncluded = (genre: GenreModel) => {
      const isAlreadyIncluded = genresInc.some((g) => g.id === genre.id);
      if (isAlreadyIncluded) {
         setGenresInc((prev) => prev.filter((g) => g.id !== genre.id));
      } else {
         setGenresInc((prev) => [...prev, genre]);
         setGenresExc((prev) => prev.filter((g) => g.id !== genre.id));
      }
   };

   const toggleExcluded = (genre: GenreModel) => {
      const isAlreadyExcluded = genresExc.some((g) => g.id === genre.id);
      if (isAlreadyExcluded) {
         setGenresExc((prev) => prev.filter((g) => g.id !== genre.id));
      } else {
         setGenresExc((prev) => [...prev, genre]);
         setGenresInc((prev) => prev.filter((g) => g.id !== genre.id));
      }
   };

   const resetGenres = () => {
      setGenresInc([]);
      setGenresExc([]);
   };

   return {
      genresInc,
      genresExc,
      resetGenres,
      toggleIncluded,
      toggleExcluded,
   };
}
