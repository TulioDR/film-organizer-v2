import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = { onClick: () => void };

export default function CloseSeasonButton({ onClick }: Props) {
   return (
      <button
         style={{ borderRadius: STANDARD_RADIUS }}
         onClick={onClick}
         className={`w-12 xl:w-16 aspect-square absolute left-4 xl:left-8 top-4 xl:top-8 flex items-center justify-center btn-hover z-10`}
      >
         <span className="material-symbols-outlined">chevron_left</span>
      </button>
   );
}
