import FormButton from "./FormButton";
import { Form } from "formik";
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
      <Form className="w-full h-full flex flex-col gap-8 p-8 bg-gray-200 rounded-lg">
         <div className="flex-[4] grid gap-8 grid-cols-3 grid-rows-2">
            <MediaTypeDd isMovie={isMovie} setFieldValue={setFieldValue} />
            <LanguageDd />
            <GenresDd isMovie={isMovie} />
            <YearDd />
            <RatingDd />
            <SortByDd isMovie={isMovie} />
         </div>
         <div className="flex-1 grid grid-cols-2 gap-8">
            <FormButton text="reset" />
            <FormButton text="search" type="submit" />
         </div>
      </Form>
   );
}
