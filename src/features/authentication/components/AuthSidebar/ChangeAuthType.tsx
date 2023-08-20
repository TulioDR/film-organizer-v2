type Props = {
   login?: true;
   register?: true;
   reset?: true;
   icon: string;
   text: string;
   onClick: () => void;
};

export default function ChangeAuthType({
   login,
   register,
   reset,
   icon,
   text,
   onClick,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`aspect-square flex flex-col justify-center items-center group
            ${login ? "bg-primary-light text-light-1" : ""}
            ${register ? "bg-secondary-dark text-dark-1" : ""}
            ${reset ? "bg-primary-dark text-dark-1" : ""}
         `}
      >
         <div className="flex flex-col gap-1 group-hover:scale-110 duration-200">
            <span className="material-icons !text-4xl">{icon}</span>
            <span className="text-sm">{text}</span>
         </div>
      </button>
   );
}
