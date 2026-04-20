import { LenisRef } from "lenis/react";
import { RefObject } from "react";

const scrollItemIntoView = (
   index: number,
   lenisRef: RefObject<LenisRef | null>,
   results: any[],
) => {
   const lenis = lenisRef.current?.lenis;
   if (!lenis) return;

   if (!results) return;
   const currentMedia = results[index];
   if (!currentMedia) return;

   const itemCard = document.getElementById(`sb-item-${currentMedia.id}`);
   if (!itemCard) return;

   lenis.scrollTo(itemCard, { duration: 0.2 });
};

export default scrollItemIntoView;
