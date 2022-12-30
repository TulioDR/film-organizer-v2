import MediaModel from "../../models/MediaModel";

type Props = {
   mediaToDelete: MediaModel[];
   isDeleteOpen: boolean;
   onClick: () => void;
   openDeleteModal: () => void;
};

export default function DeleteButton({
   isDeleteOpen,
   onClick,
   mediaToDelete,
   openDeleteModal,
}: Props) {
   return (
      <>
         <div className="fixed bottom-5 right-5 mr-5 rounded-lg bg-red-700 text-white flex items-center">
            <div
               className={`h-full duration-200 overflow-hidden ${
                  isDeleteOpen ? "w-72" : "w-0"
               }`}
            >
               <div className="shrink-0 h-full w-72 flex items-center justify-center float-right">
                  Which ones you want to remove?
               </div>
            </div>
            <button
               onClick={onClick}
               className="aspect-square h-12 grid place-content-center"
            >
               <span className="material-icons text-3xl">
                  {isDeleteOpen ? "close" : "delete"}
               </span>
            </button>
         </div>
         <div className="fixed bottom-5 select-none">
            <button
               onClick={openDeleteModal}
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
         </div>
      </>
   );
}
