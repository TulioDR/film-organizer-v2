import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   text: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function DisplayMediaButton({
   text,
   onClick,
   isSelected,
}: Props) {
   return (
      <button
         style={{ borderRadius: STANDARD_RADIUS }}
         onClick={onClick}
         className={`h-10 flex-1  bg-white dark:bg-black border
             border-border-light dark:border-border-dark
             hover:border-black hover:dark:border-white
             active:border-black active:dark:border-white
               flex items-center justify-center
            ${isSelected ? "outline-accent outline-2 outline" : ""}`}
      >
         {text}
      </button>
   );
}
