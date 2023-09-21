type Props = {
   onClick: () => void;
   isDeleteOpen: boolean;
};

export default function OpenDeleteMediaButton({
   onClick,
   isDeleteOpen,
}: Props) {
   return (
      <button
         onClick={onClick}
         className="aspect-square h-12 grid place-content-center"
      >
         <span className="material-symbols-outlined text-3xl">
            {isDeleteOpen ? "close" : "delete"}
         </span>
      </button>
   );
}
