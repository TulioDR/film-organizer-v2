type Props = {
   onClick: () => void;
   disabled: boolean;
   back?: true;
};

export default function HomeNavButton({ onClick, disabled, back }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-14 rounded-full aspect-square border-2 grid place-content-center ${
            disabled
               ? "pointer-events-none border-text-3 text-text-3"
               : "border-white text-white"
         }`}
      >
         <span className="material-icons">
            {back ? "navigate_before" : "navigate_next"}
         </span>
      </button>
   );
}
