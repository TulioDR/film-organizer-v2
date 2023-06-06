import RevealHorizontal from "@/animations/RevealHorizontal";

type Props = { onClick: () => void };

export default function CloseSeasonButton({ onClick }: Props) {
   return (
      <div className="absolute z-10 top-0 right-4">
         <RevealHorizontal stagger fromRight>
            <button
               onClick={onClick}
               className="w-10 h-10 rounded-md bg-secondary text-white grid place-content-center shadow-lg"
            >
               <span className="material-icons">close</span>
            </button>
         </RevealHorizontal>
      </div>
   );
}
