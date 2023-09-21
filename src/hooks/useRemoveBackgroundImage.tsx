import { useEffect } from "react";
import useBackground from "./useBackground";

export default function useRemoveBackgroundImage() {
   const { removeBackground } = useBackground();

   useEffect(() => {
      removeBackground();
   }, [removeBackground]);
}
