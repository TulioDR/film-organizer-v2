type Props = {
   onClick: () => void;
   left?: boolean;
   right?: boolean;
   isDisabled: boolean;
};

export default function SlideButton({
   onClick,
   left,
   right,
   isDisabled,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`w-8 h-full flex items-center justify-center
            bg-black hover:bg-white active:bg-white 
            dark:bg-white dark:hover:bg-black dark:active:bg-black 
            text-white hover:text-black active:text-black
            dark:text-black dark:hover:text-white dark:active:text-white
            border-border-light dark:border-border-dark
            ${left ? "top-0 left-0 border-r" : ""}
            ${right ? "top-0 right-0 border-l" : ""}
            ${isDisabled ? "pointer-events-none dark:text-black/50 text-white/50" : ""}
         `}
      >
         <span className="material-symbols-outlined">
            {left && "chevron_left"}
            {right && "chevron_right"}
         </span>
      </button>
   );
}
