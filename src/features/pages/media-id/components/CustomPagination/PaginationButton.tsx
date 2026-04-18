import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   children: React.ReactNode;
   isActive?: boolean;
   onClick: () => void;
   isDisabled?: boolean;
};

export default function PaginationButton({
   children,
   isActive,
   onClick,
   isDisabled = false,
}: Props) {
   return (
      <button
         style={{ borderRadius: STANDARD_RADIUS }}
         onClick={onClick}
         className={`h-full aspect-square flex items-center justify-center
            text-black dark:text-white
            border border-border-light dark:border-border-dark
            hover:border-black dark:hover:border-white
            active:border-black dark:active:border-white
            ${isActive ? "bg-accent text-white" : ""}
            ${isDisabled ? "pointer-events-none opacity-50" : ""}
         `}
      >
         {children}
      </button>
   );
}
