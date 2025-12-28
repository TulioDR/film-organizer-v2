import { useState, useEffect } from "react";
import DropDown from "../Dropdown";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

export default function YearDd() {
   const [releaseYears, setReleaseYears] = useState<SelectOption[]>([]);

   useEffect(() => {
      let years: SelectOption[] = [{ label: "Any year", value: "" }];
      const year = new Date().getFullYear();
      for (let i = year + 5; i >= 1950; i--) {
         years.push({ label: i, value: i });
      }
      setReleaseYears(years);
   }, []);
   return (
      <DropDown
         name="year"
         title="Year of Release"
         options={releaseYears}
         icon="event"
      />
   );
}
