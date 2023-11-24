import LoadingSpinner from "@/components/LoadingSpinner";

export default function SeasonLoadingAnimation() {
   return (
      <div className="h-full w-full flex items-center justify-center">
         <div className="w-12">
            <LoadingSpinner />
         </div>
      </div>
   );
}
