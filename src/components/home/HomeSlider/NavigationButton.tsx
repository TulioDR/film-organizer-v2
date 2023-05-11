type Props = {
   onClick: () => void;
   disabled: boolean;
   back?: true;
};

export default function NavigationButton({ onClick, disabled, back }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-14 rounded-full aspect-square border-2 grid place-content-center ${
            disabled
               ? "pointer-events-none border-dark-text-soft text-dark-text-soft"
               : "border-white text-white"
         }`}
      >
         <span className="material-icons">
            {back ? "navigate_before" : "navigate_next"}
         </span>
      </button>
   );
}
