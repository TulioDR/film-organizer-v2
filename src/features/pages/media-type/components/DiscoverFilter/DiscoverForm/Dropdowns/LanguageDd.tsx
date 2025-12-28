import { useState, useEffect } from "react";
import DropDown from "../Dropdown";

import API_PUBLIC from "@/api/public";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

type Props = {};

export default function LanguageDd({}: Props) {
   const [languagesOptions, setLanguagesOptions] = useState<SelectOption[]>([]);

   useEffect(() => {
      const getLanguages = async () => {
         const { data } = await API_PUBLIC.get("/discover/languages");
         let lan: SelectOption[] = [];
         data.forEach((lang: any) => {
            lan.push({ value: lang.iso_639_1, label: lang.english_name });
         });
         setLanguagesOptions(lan);
      };
      getLanguages();

      // Clean up
      return () => {
         setLanguagesOptions([]);
      };
   }, []);
   return (
      <DropDown
         name="with_original_language"
         title="Languages"
         options={languagesOptions}
         icon="translate"
      />
   );
}
