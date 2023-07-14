type Props = {
   onClick: () => void;
   disabled: boolean;
   back?: true;
};
export default function PeopleNavButton({ onClick, disabled, back }: Props) {
   return (
      <button
         onClick={onClick}
         className={`grid place-content-center ${
            disabled ? "pointer-events-none text-gray-500" : "text-white"
         }`}
      >
         <span className="material-icons !text-3xl">
            {back ? "navigate_before" : "navigate_next"}
         </span>
      </button>
   );
}
