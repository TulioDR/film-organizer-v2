import { useRouter } from "next/router";

import DiscoverSubmitButton from "./DiscoverSubmitButton";
import { Form, Formik } from "formik";
import DiscoverFormContainer from "./DiscoverFormContainer";
import MediaTypeDd from "./Dropdowns/MediaTypeDd";
import LanguageDd from "./Dropdowns/LanguageDd";
import GenresDd from "./Dropdowns/GenresDd";
import YearDd from "./Dropdowns/YearDd";
import RatingDd from "./Dropdowns/RatingDd";
import SortByDd from "./Dropdowns/SortByDd";

type Props = {
   toggle: () => void;
};
export default function DiscoverForm({ toggle }: Props) {
   const router = useRouter();

   const handleSubmit = (values: any) => {
      console.log(values);
      const { media_type, with_original_language, with_genres } = values;
      const { year, vote_average, sort_by } = values;
      const isMovie = media_type.value === "movie";

      const mt = `media_type=${media_type.value}`;
      const l = `&with_original_language=${with_original_language.value}`;
      const g = `&with_genres=${with_genres.value}`;
      const y = `&${isMovie ? "year" : "first_air_date_year"}=${year.value}`;
      const r = `&vote_average.gte=${vote_average.value}`;
      const sb = `&sort_by=${sort_by.value}`;

      const searchTerms = mt + l + g + y + r + sb;
      router.push(`/discover?${searchTerms}`);
      toggle();
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
      <DiscoverFormContainer>
         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
               <Form className="space-y-5 p-10">
                  <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 w-full h-full">
                     <MediaTypeDd
                        isMovie={values.media_type.value === "movie"}
                        setFieldValue={setFieldValue}
                     />
                     <LanguageDd />
                     <GenresDd isMovie={values.media_type.value === "movie"} />
                     <YearDd />
                     <RatingDd />
                     <SortByDd isMovie={values.media_type.value === "movie"} />
                  </div>
                  <DiscoverSubmitButton />
               </Form>
            )}
         </Formik>
      </DiscoverFormContainer>
   );
}
