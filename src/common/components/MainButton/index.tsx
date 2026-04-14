import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
   type?: "delete" | "accent";
   onClick?: (e: any) => void;
   text?: string;
   icon?: string;
   square?: true;
   keyboardKey?: string;
   isLoading?: boolean;
   submit?: true;
};

export default function MainButton({
   type,
   onClick,
   text,
   icon,
   square,
   keyboardKey,
   isLoading,
   submit,
}: Props) {
   const isDelete = type === "delete";
   const isAccent = type === "accent";

   return (
      <button
         onMouseDown={(e) => e.preventDefault()}
         onClick={isLoading ? undefined : onClick}
         type={submit ? "submit" : "button"}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`h-12 relative
            ${square ? "aspect-square" : "px-4"}
            ${isAccent ? "bg-accent text-white" : ""}      
            ${isDelete ? "bg-red-600 hover:bg-red-600/80 active:bg-red-600/80 text-white" : ""}
            ${!type ? "bg-black hover:bg-black/80 active:bg-black/80 dark:bg-white dark:hover:bg-white/80 dark:active:bg-white/80 text-white dark:text-black" : ""}
         `}
      >
         {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-6">
                  <LoadingSpinner />
               </div>
            </div>
         )}
         <div
            className={`flex items-center justify-center w-full h-full relative ${isLoading ? "opacity-0" : ""}`}
         >
            {text ? (
               <span className="tracking-widest font-medium capitalize">
                  {text}
               </span>
            ) : (
               <span className="material-symbols-outlined">{icon}</span>
            )}
            {keyboardKey && (
               <span className="text-xs absolute bottom-0 right-1 text-white dark:text-black tracking-wider">
                  {keyboardKey}
               </span>
            )}
         </div>
      </button>
   );
}
