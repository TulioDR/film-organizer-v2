import { SelectOption } from "@/features/pages/media-type/models/Filters";
import DropDown from "../Dropdown";

import { useEffect } from "react";

type Props = {
   isMovie: boolean;
   setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
   ) => void;
};

export default function MediaTypeDd({ isMovie, setFieldValue }: Props) {
   const searchTypes: SelectOption[] = [
      { label: "Movies", value: "movie" },
      { label: "Series", value: "tv" },
   ];

   useEffect(() => {
      setFieldValue("with_genres", { value: "", label: "All genres" });
      setFieldValue("sort_by", {
         label: "Popularity Descending",
         value: "popularity.desc",
      });
   }, [isMovie, setFieldValue]);

   return (
      <DropDown
         name="media_type"
         title="Type of Media"
         options={searchTypes}
         icon={isMovie ? "movie" : "smart_display"}
      />
   );
}
