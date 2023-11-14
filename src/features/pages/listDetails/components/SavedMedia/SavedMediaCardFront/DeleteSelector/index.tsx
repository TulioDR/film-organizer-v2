import DeleteSelectorContainer from "./DeleteSelectorContainer";

type Props = {
   isSelected: boolean;
   markToDelete: () => void;
};

export default function DeleteSelector({ isSelected, markToDelete }: Props) {
   return (
      <DeleteSelectorContainer onClick={markToDelete}>
         <div
            className={`bg-black duration-200 w-full h-full group ${
               isSelected
                  ? "bg-opacity-50"
                  : "bg-opacity-0 lg:hover:bg-opacity-50"
            }`}
         >
            <div
               className={`h-full w-full grid place-content-center duration-200 ${
                  isSelected
                     ? "scale-125"
                     : "scale-75 active:scale-75 lg:group-hover:scale-100 opacity-0 lg:group-hover:opacity-100"
               }`}
            >
               <span className="material-symbols-outlined text-6xl lg:text-8xl xl:text-9xl text-red-700">
                  delete
               </span>
            </div>
         </div>
      </DeleteSelectorContainer>
   );
}
