import { useState, useEffect } from "react";
import DropDown from "../Dropdown";

import API_PUBLIC from "@/api/public";
import languages from "../../../../images/languages.jpg";
import { OptionModel } from "@/features/pages/discover/models/DiscoverModel";

type Props = {};

export default function LanguageDd({}: Props) {
   const [languagesOptions, setLanguagesOptions] = useState<OptionModel[]>([]);

   useEffect(() => {
      const getLanguages = async () => {
         const { data } = await API_PUBLIC.get("/discover/languages");
         let lan: OptionModel[] = [];
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
         image={languages}
      />
   );
}
