import LoadingSpinner from "@/common/components/LoadingSpinner";

type Props = {
   submit?: boolean;
   warning?: boolean;
   special?: boolean;
   onClick?: () => void;
   children: React.ReactNode;
   isLoading?: boolean;
};

export default function ModalButton({
   submit,
   warning,
   special,
   onClick,
   children,
   isLoading,
}: Props) {
   return (
      <button
         onClick={onClick || undefined}
         type={submit ? "submit" : "button"}
         className={`px-3 h-12 rounded-lg font-medium 
            border border-border-light dark:border-border-dark
            hover:border-black dark:hover:border-white
            active:border-black dark:active:border-white
            ${warning ? "bg-red-500 text-white" : ""}
            ${special ? "bg-accent text-white dark:text-black" : ""}
            ${!warning && !special ? "bg-background-light dark:bg-background-accent-dark text-light-1 dark:text-dark-1" : ""}
            ${isLoading ? "pointer-events-none" : ""}`}
      >
         <div className="w-20 flex items-center justify-center relative">
            {isLoading && (
               <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  <div className="w-6">
                     <LoadingSpinner />
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
