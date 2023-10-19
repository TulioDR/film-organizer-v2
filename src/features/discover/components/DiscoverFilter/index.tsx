import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import DiscoverForm from "./DiscoverForm";
import ToggleFilterButton from "./ToggleFilterButton";
import { Formik } from "formik";
import { useRouter } from "next/router";

export default function DiscoverFilter() {
   const router = useRouter();

   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggle = () => setIsOpen((prev) => !prev);

   const handleSubmit = (values: any) => {
      const { media_type, with_original_language, with_genres } = values;
      const { year, vote_average, sort_by } = values;

      const isMovie = media_type.value === "movie";

      const mt = `media_type=${media_type.value}`;
      const l = `&with_original_language=${with_original_language.value}`;
      const g = `&with_genres=${with_genres.value}`;
      const y = `&${isMovie ? "year" : "first_air_date"}=${year.value}`;
      const r = `&vote_average.gte=${vote_average.value}`;
      const sb = `&sort_by=${sort_by.value}`;

      const searchTerms = mt + l + g + y + r + sb;
      router.push(`/discover?${searchTerms}`);
      setIsOpen(false);
   };

   const initialValues = {
      media_type: { value: "movie", label: "Movies" },
      with_original_language: { value: "en", label: "English" },
      with_genres: { value: "", label: "All genres" },
      vote_average: { value: "", label: "Any rating" },
      year: { value: "", label: "Any year" },
      sort_by: { value: "popularity.desc", label: "Popularity Descending" },
   };
   return (
      <>
         <ToggleFilterButton onClick={toggle} isOpen={isOpen} />
         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
               <AnimatePresence>
                  {isOpen && (
                     <DiscoverForm
                        values={values}
                        setFieldValue={setFieldValue}
                     />
                  )}
               </AnimatePresence>
            )}
         </Formik>
      </>
   );
}
