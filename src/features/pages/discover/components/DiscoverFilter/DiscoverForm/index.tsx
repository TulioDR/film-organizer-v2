import DiscoverSubmitButton from "./DiscoverSubmitButton";
import { Form } from "formik";
import DiscoverFormContainer from "./DiscoverFormContainer";
import MediaTypeDd from "./Dropdowns/MediaTypeDd";
import LanguageDd from "./Dropdowns/LanguageDd";
import GenresDd from "./Dropdowns/GenresDd";
import YearDd from "./Dropdowns/YearDd";
import RatingDd from "./Dropdowns/RatingDd";
import SortByDd from "./Dropdowns/SortByDd";

type Props = {
   values: any;
   setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
   ) => void;
};
export default function DiscoverForm({ values, setFieldValue }: Props) {
   const isMovie = values.media_type.value === "movie";
   return (
      <DiscoverFormContainer>
         <Form className="space-y-5 p-10">
            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 w-full h-full">
               <MediaTypeDd isMovie={isMovie} setFieldValue={setFieldValue} />
               <LanguageDd />
               <GenresDd isMovie={isMovie} />
               <YearDd />
               <RatingDd />
               <SortByDd isMovie={isMovie} />
            </div>
            <DiscoverSubmitButton />
         </Form>
      </DiscoverFormContainer>
   );
}
