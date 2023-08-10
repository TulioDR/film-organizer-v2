import { useState, useEffect } from "react";
export default function useWindowWidth() {
   const [windowWidth, setWindowWidth] = useState(0);

   useEffect(() => {
      const handleWindowResize = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleWindowResize);
      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   }, []);

   useEffect(() => {
      setWindowWidth(window.innerWidth);
   }, []);

   return { windowWidth };
}
