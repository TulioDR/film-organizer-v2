import React, { useEffect } from "react";
import FilterCard from "../../FilterCard";
import Datepicker from "react-tailwindcss-datepicker";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { RELEASE_DATE_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {
   small?: true;
};

export default function ReleaseDateFilter({ small }: Props) {
   const { dateRange, setDateRange } = useMediaFilterContext();

   useEffect(() => {
      const customInput = document.getElementById("custom-tailwind-input");
      if (!customInput) return;
      // console.log(customInput);
   }, []);

   return (
      <FilterCard
         icon={RELEASE_DATE_ICON}
         name="Release date"
         className={`${small ? "" : "col-span-2"}`}
      >
         <Datepicker
            value={dateRange}
            inputId="custom-tailwind-input"
            onChange={(newValue) => setDateRange(newValue)}
            showShortcuts={!small}
            useRange={!small}
            readOnly
            primaryColor="amber"
            inputClassName="focus:!outline-accent text-black dark:text-white outline focus:outline-2 outline-border-light dark:outline-border-dark outline-1 w-full rounded-sm h-9 bg-primary-light dark:bg-primary-dark px-3 py-2 hover:outline-black dark:hover:outline-white"
         />
      </FilterCard>
   );
}
