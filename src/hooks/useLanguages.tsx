import { useEffect, useState } from "react";
import { OptionModel } from "../models/DiscoverModel";
import API_PUBLIC from "@/api/public";

export default function useLanguages() {
   const [languagesOptions, setLanguagesOptions] = useState<OptionModel[]>([]);

   useEffect(() => {
      const getLanguages = async () => {
         const { data } = await API_PUBLIC.get("/languages");
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
