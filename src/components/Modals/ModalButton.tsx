import LoadingSpinner from "../LoadingSpinner";

type Props = {
   submit?: boolean;
   red?: boolean;
   blue?: boolean;
   onClick?: () => void;
   children: React.ReactNode;
   isLoading?: boolean;
};

export default function ModalButton({
   submit,
   red,
   blue,
   onClick,
   children,
   isLoading,
}: Props) {
   return (
      <button
         onClick={onClick || undefined}
         type={submit ? "submit" : "button"}
         className={`px-3 h-10 rounded-lg shadow-xl ${
            red
               ? "bg-red-600 text-white"
               : blue
               ? "bg-blue-600 text-white"
               : "bg-secondary-light dark:bg-secondary-dark text-light-1 dark:text-dark-1"
         } ${isLoading ? "pointer-events-none" : ""}`}
      >
         <div className="w-20 flex items-center justify-center relative">
            {isLoading && (
               <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  <div className="w-6">
                     <LoadingSpinner white />
                  </div>
               </div>
            )}
            <span className={`${isLoading ? "opacity-0" : ""}`}>
               {children}
            </span>
         </div>
      </button>
   );
}
