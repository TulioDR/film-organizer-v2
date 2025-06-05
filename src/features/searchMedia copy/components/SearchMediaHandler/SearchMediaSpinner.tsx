import LoadingSpinner from "@/components/LoadingSpinner";

export default function SearchMediaSpinner() {
   return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pointer-events-none z-50">
         <div className="w-32">
            <LoadingSpinner />
         </div>
      </div>
   );
}
