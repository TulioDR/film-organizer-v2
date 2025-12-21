import { useEffect, useState } from "react";
import { OptionModel } from "../models/DiscoverModel";
import API_PUBLIC from "@/api/public";

export default function useFetchedOptions() {
   const [language, setLanguage] = useState<OptionModel | null>(null);
   const [country, setCountry] = useState<OptionModel | null>(null);

   const [languagesOptions, setLanguagesOptions] = useState<OptionModel[]>([]);
   const [countriesOptions, setCountriesOptions] = useState<OptionModel[]>([]);

   const resetFetchedOptions = () => {
      setLanguage(null);
      setCountry(null);
   };

   useEffect(() => {
      const controller = new AbortController();
      const fetchFilters = async () => {
         try {
            const [langRes, countryRes] = await Promise.all([
               API_PUBLIC.get("/discover/languages", {
                  signal: controller.signal,
               }),
               API_PUBLIC.get("/discover/countries", {
                  signal: controller.signal,
               }),
            ]);
            setLanguagesOptions(
               langRes.data.map((lang: any) => ({
                  value: lang.iso_639_1,
                  label: lang.english_name,
               }))
            );
            setCountriesOptions(
               countryRes.data.map((country: any) => ({
                  value: country.iso_3166_1,
                  label: country.english_name,
               }))
            );
         } catch (error: any) {
            if (error.name === "CanceledError" || error.name === "AbortError") {
               console.log("Requests canceled");
            } else {
               console.error("Fetch error:", error);
            }
         }
      };
      fetchFilters();
      return () => controller.abort();
   }, []);

   return {
      languagesOptions,
      countriesOptions,
      language,
      setLanguage,
      country,
      setCountry,
      resetFetchedOptions,
   };
}
