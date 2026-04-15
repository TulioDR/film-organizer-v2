import { useEffect } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { RELEASE_DATE_ICON } from "@/features/pages/media-type/constants/FILTER_ICONS";
import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";

type Props = {
   small?: true;
};

export default function ReleaseDateFilter({ small }: Props) {
   const { state, dispatch } = useMediaFilterContext();

   useEffect(() => {
      const customInput = document.getElementById("custom-tailwind-input");
      if (!customInput) return;
      // console.log(customInput);
   }, []);

   const setDateRange = (range: DateValueType) => {
      dispatch({
         type: "SET_DATES",
         payload: {
            startDate: range?.startDate || null,
            endDate: range?.endDate || null,
         },
      });
   };

   return (
      <MainFilterCard
         icon={RELEASE_DATE_ICON}
         name="Release date"
         className={`${small ? "" : "col-span-2"}`}
      >
         <Datepicker
            value={state.dateRange}
            inputId="custom-tailwind-input"
            onChange={(newValue) => setDateRange(newValue)}
            showShortcuts={!small}
            useRange={!small}
            readOnly
            primaryColor="amber"
            inputClassName="focus:!outline-accent focus:!outline focus:outline-2 text-black dark:text-white border-border-light dark:border-border-dark w-full rounded h-9 bg-primary-light dark:bg-primary-dark px-3 py-2 border hover:!border-black dark:hover:!border-white focus:hover:border-none"
         />
      </MainFilterCard>
   );
}
