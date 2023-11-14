import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   type: "movie" | "tv" | "all";
   selectedType: "movie" | "tv" | "all";
   name: string;
   setSelectedType: React.Dispatch<
      React.SetStateAction<"movie" | "tv" | "all">
   >;
};

export default function TypePill({
   type,
   selectedType,
   name,
   setSelectedType,
}: Props) {
   const isSelected = type === selectedType;

   const { isDarkMode } = useSelector((state: StoreModel) => state.theme);

   const { backgroundImage } = useSelector(
      (state: StoreModel) => state.background
   );
   const isDark = backgroundImage ? true : isDarkMode;
   return (
      <button
         onClick={() => setSelectedType(type)}
         className={`h-10 rounded-lg px-4 text-xs sm:text-sm font-title ${
            isSelected
               ? isDark
                  ? "bg-dark-1 text-light-1"
                  : "bg-light-1 text-dark-1 "
               : isDark
               ? "border border-dark-1 text-dark-1 hover:bg-secondary-dark"
               : "border border-light-1 text-light-1 hover:bg-secondary-light"
         }`}
      >
         {name}
      </button>
   );
}
