import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   type: "edit" | "delete" | "update" | "cancel";
   onClick?: (e: any) => void;
};

export default function PlaylistCardButton({ type, onClick }: Props) {
   const isDelete = type === "delete";
   const isEdit = type === "edit";

   const isUpdate = type === "update";
   const isCancel = type === "cancel";

   return (
      <button
         onMouseDown={(e) => e.preventDefault()}
         onClick={onClick}
         type="button"
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`h-full flex items-center justify-center relative
         ${isEdit || isUpdate || isCancel ? "bg-black hover:bg-black/80 active:bg-black/80 dark:bg-white dark:hover:bg-white/80 dark:active:bg-white/80 text-white dark:text-black" : ""}
         ${isDelete ? "bg-red-600 hover:bg-red-600/80 active:bg-red-600/80 text-white" : ""}
         ${isEdit || isDelete ? "aspect-square" : "px-4"}
      `}
      >
         {isEdit || isDelete ? (
            <span className="material-symbols-outlined">
               {isEdit ? "edit" : "delete"}
            </span>
         ) : (
            <span className="tracking-widest font-medium">
               {isUpdate ? "Update" : ""}
               {isCancel ? "Cancel" : ""}
            </span>
         )}
         {(isUpdate || isCancel) && (
            <span className="text-xs absolute bottom-0 right-1 text-white dark:text-black tracking-wider">
               {isUpdate ? "Enter" : "Esc"}
            </span>
         )}
      </button>
   );
}
