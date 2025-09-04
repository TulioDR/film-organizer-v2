type Props = {
   onClick: () => void;
   isOpen: boolean;
};

export default function ToggleFilterButton({ onClick, isOpen }: Props) {
   return (
      <button
         onClick={onClick}
         className={`fixed z-50 right-8 bottom-8 h-16 aspect-square bg-gray-200 rounded-t-lg grid place-content-center ${
            isOpen ? "" : "rounded-b-lg delay-700"
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
