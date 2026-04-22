import { useEffect } from "react";
import { useCustomLenisInstance } from "./useCustomLenisInstance";

export default function useScrollToTop() {
   const { instance } = useCustomLenisInstance();
   useEffect(() => {
      if (!instance) return;
      instance.scrollTo("top", { immediate: true });
   }, [instance]);
}
