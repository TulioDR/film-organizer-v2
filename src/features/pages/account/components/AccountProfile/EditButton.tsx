import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   onClick: () => void;
   icon: string;
   red?: true;
};

export default function EditButton({ onClick, icon, red }: Props) {
   return (
      <button
         style={{ borderRadius: STANDARD_RADIUS }}
         onClick={onClick}
         className={`text-dark-1 flex items-center justify-center h-full aspect-square ${
            red ? "bg-red-700" : "bg-blue-600"
         }`}
      >
         <span className="material-symbols-outlined">{icon}</span>
      </button>
   );
}
