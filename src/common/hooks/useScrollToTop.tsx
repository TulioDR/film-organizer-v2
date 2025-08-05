import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function useScrollToTop() {
   const lenis = useLenis();

   useEffect(() => {
      if (!lenis) return;
      lenis.scrollTo("top", { immediate: true });
   }, [lenis]);
}
