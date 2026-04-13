import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   icon: string;
   text: string;
   onClick: () => void;
};

export default function NavDropdownOption({ icon, text, onClick }: Props) {
   return (
      <button
         style={{ borderRadius: STANDARD_RADIUS - 16 }}
         onClick={onClick}
         className={`h-12 w-full flex items-center gap-2
            text-black dark:text-white
            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
            active:bg-black active:text-white dark:active:bg-white dark:active:text-black
         `}
      >
         <div className="h-full aspect-square flex items-center justify-center">
            <span className="material-symbols-outlined">{icon}</span>
         </div>
         <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider">
            {text}
         </span>
      </button>
   );
}
