import LoadingSpinner from "@/components/LoadingSpinner";

export default function SearchMediaSpinner() {
   return (
      <div className="w-full flex justify-center mt-10">
         <div className="w-32">
            <LoadingSpinner />
         </div>
      </div>
   );
}
