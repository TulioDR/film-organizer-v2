import { SavedMediaModel } from "@/models/MediaModel";

type Props = {
   mediaToDelete: SavedMediaModel[];
   isDeleteOpen: boolean;
   onClick: () => void;
};

export default function OpenDeleteModalButton({
   isDeleteOpen,
   mediaToDelete,
   onClick,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-12 rounded-lg text-white duration-200 overflow-hidden ${
            isDeleteOpen ? "w-20" : "w-0"
         } ${
            mediaToDelete.length
               ? "bg-red-700"
               : "pointer-events-none bg-gray-600"
         }`}
      >
         <div className="w-20 h-full shrink-0 flex items-center justify-center">
            Delete
         </div>
      </button>
   );
}
