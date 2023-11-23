type Props = {
   onClick: () => void;
   icon: string;
   red?: true;
};

export default function EditButton({ onClick, icon, red }: Props) {
   return (
      <button
         onClick={onClick}
         className={`text-dark-1 grid place-content-center rounded-lg w-10 aspect-square ${
            red ? "bg-red-700" : "bg-blue-600"
         }`}
      >
         <span className="material-symbols-outlined">{icon}</span>
      </button>
   );
}
