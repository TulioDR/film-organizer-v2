import { useState } from "react";
import { DateValueType } from "react-tailwindcss-datepicker";

export default function useDateFilter() {
   const initialDateRange = { startDate: null, endDate: null };
   const [dateRange, setDateRange] = useState<DateValueType>(initialDateRange);

   const resetDateRange = () => setDateRange(initialDateRange);

   return { dateRange, setDateRange, resetDateRange };
}
