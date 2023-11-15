type Props = {
   onClick: () => void;
   isOpen: boolean;
};

export default function ToggleFilterButton({ onClick, isOpen }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-10 aspect-square bg-secondary-light dark:bg-secondary-dark rounded-t-lg grid place-content-center ${
            isOpen ? "" : "rounded-b-lg"
         }`}
      >
         <span
            style={{ fontVariationSettings: `"FILL" 1` }}
            className="material-symbols-outlined"
         >
            {isOpen ? "close" : "filter_alt"}
         </span>
      </button>
   );
}
