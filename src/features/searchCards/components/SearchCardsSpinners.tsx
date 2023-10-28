import LoadingSpinner from "@/components/LoadingSpinner";

export default function SearchCardsSpinners() {
   return (
      <div className="w-full flex justify-center mt-10">
         <div className="w-32">
            <LoadingSpinner />
         </div>
      </div>
   );
}
