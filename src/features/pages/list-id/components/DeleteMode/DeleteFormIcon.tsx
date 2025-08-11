type Props = {
   onClick: () => void;
};

export default function DeleteFormIcon({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="aspect-square h-full grid place-content-center"
      >
         <span className="material-symbols-outlined text-3xl">delete</span>
      </button>
   );
}
