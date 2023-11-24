import { useState, useEffect } from "react";
import DropDown from "../Dropdown";
import yearImage from "../../../../images/year.jpg";
import { OptionModel } from "@/features/pages/discover/models/DiscoverModel";

export default function YearDd() {
   const [releaseYears, setReleaseYears] = useState<OptionModel[]>([]);

   useEffect(() => {
      let years: OptionModel[] = [{ label: "Any year", value: "" }];
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
         image={yearImage}
      />
   );
}
