import { useEffect, useState } from "react";
import { OptionModel } from "../models/DiscoverModel";

export default function useLanguages() {
   const [languagesOptions, setLanguagesOptions] = useState<OptionModel[]>([]);

   useEffect(() => {
      const getLanguages = async () => {
         const res = await fetch("/api/languages");
         const data = await res.json();
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

   return { languagesOptions };
}
