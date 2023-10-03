import { useEffect } from "react";

export default function useScrollToTop() {
   useEffect(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }, []);
}
