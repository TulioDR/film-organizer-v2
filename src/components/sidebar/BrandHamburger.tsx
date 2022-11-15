type Props = {
   onClick: () => void;
};

export default function BrandHamburger({ onClick }: Props) {
   return (
      <div className="flex items-center py-5 space-x-3 pl-3 truncate">
         <button
            onClick={onClick}
            className="h-9 min-w-[36px] bg-blue-500 rounded-lg grid place-content-center"
         >
            <span className="material-icons">menu</span>
         </button>
         <span className="text-xl font-bold truncate">Film Organizer</span>
      </div>
   );
}
