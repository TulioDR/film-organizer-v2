import { useEffect } from "react";
import useBackground from "./useBackground";

export default function useRemoveBackgroundImage(noRemoveBackground?: true) {
   const { removeBackground } = useBackground();

   useEffect(() => {
      if (noRemoveBackground) return;
      removeBackground();
   }, [removeBackground]);
}
