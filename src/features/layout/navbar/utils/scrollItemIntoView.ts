import { LenisRef } from "lenis/react";

const scrollItemIntoView = (
   index: number,
   lenisRef: React.RefObject<LenisRef>,
   results: any[]
) => {
   const lenis = lenisRef.current?.lenis;
   if (!lenis) return;

   if (!results) return;
   const currentMedia = results[index];
   if (!currentMedia) return;

   const itemCard = document.getElementById(`sb-item-${currentMedia.id}`);
   if (!itemCard) return;

   const scrollContainerHeight = lenis.rootElement.clientHeight;
   const cardHeight = itemCard.offsetHeight;
   const centerOffset = scrollContainerHeight / 2 - cardHeight / 2;
   const scrollTargetPosition = itemCard.offsetTop - centerOffset;

   lenis.scrollTo(scrollTargetPosition, { duration: 0.5 });
};

export default scrollItemIntoView;
