import { useEffect, useState } from "react";
import useLoader from "./useLoader";

export default function useStopLoader() {
   const { isLoading, stopLoading } = useLoader();

   const [value, setValue] = useState(false);
   useEffect(() => {
      if (!value) setValue(true);
   }, [value]);

   useEffect(() => {
      if (value) {
         console.log("stop loading");
         stopLoading();
      }
   }, [value]);

   return { isLoading };
}
