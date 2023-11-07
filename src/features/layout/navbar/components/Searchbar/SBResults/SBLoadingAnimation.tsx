import LoadingSpinner from "@/components/LoadingSpinner";

export default function SBLoadingAnimation() {
   return (
      <div className="w-full grid place-content-center h-40">
         <div className="w-12">
            <LoadingSpinner />
         </div>
      </div>
   );
}
