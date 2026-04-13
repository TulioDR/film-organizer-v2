import LoadingSpinner from "@/common/components/LoadingSpinner";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   onClick: () => void;
   isOpen: boolean;
   isLoaded: boolean;
};

export default function ToggleDropdownButton({
   onClick,
   isOpen,
   isLoaded,
}: Props) {
   return (
      <button
         onClick={isLoaded ? onClick : undefined}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`flex w-16 items-center h-12 px-2 border text-black dark:text-white
            ${
               isOpen
                  ? "border-black dark:border-white"
                  : "border-border-light dark:border-border-dark hover:border-black dark:hover:border-white active:border-black dark:active:border-white"
            }
         `}
      >
         {isLoaded ? (
            <>
               <span className="material-symbols-outlined">person</span>
               <div
                  className={`flex items-center justify-center duration-200 ${isOpen ? "rotate-180" : ""}`}
               >
                  <span className="material-symbols-outlined">
                     keyboard_arrow_down
                  </span>
               </div>
            </>
         ) : (
            <div className="w-full h-full flex items-center justify-center">
               <div className="w-2/3">
                  <LoadingSpinner />
               </div>
            </div>
         )}
      </button>
   );
}
