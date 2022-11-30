type Props = {
   onClick: () => void;
};

export default function ToggleSidebar({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="h-9 w-9 flex-shrink-0 bg-blue-500 rounded-lg grid place-content-center"
      >
         <span className="material-icons">menu</span>
      </button>
   );
}
