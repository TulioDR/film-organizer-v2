import Lenis from "lenis";

const scrollItemIntoView = (
   index: number,
   lenis: Lenis | null, // Pass the direct instance here
   results: any[],
) => {
   if (!lenis || !results) return;

   const currentMedia = results[index];
   if (!currentMedia) return;

   // Ensure this ID matches the id prop on your ResultCard
   const itemCard = document.getElementById(`sb-item-${currentMedia.id}`);
   if (!itemCard) return;

   lenis.scrollTo(itemCard, { duration: 0.2 });
};

export default scrollItemIntoView;
