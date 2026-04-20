import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
type Props = {
   hideUi: boolean;
   onClick: () => void;
};

export default function BackgroundViewButton({ hideUi, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`fixed bottom-4 right-8 w-16 z-10 aspect-square flex items-center justify-center 
            border border-border-light dark:border-border-dark
            hover:border-black dark:hover:border-white
            active:border-black dark:active:border-white 
            bg-white dark:bg-black text-black dark:text-white

         `}
      >
         <span className="material-symbols-outlined">
            {hideUi ? "visibility" : "visibility_off"}
         </span>
      </button>
   );
}
