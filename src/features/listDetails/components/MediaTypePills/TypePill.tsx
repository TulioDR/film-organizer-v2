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
   return (
      <button
         onClick={() => setSelectedType(type)}
         className={`h-10 rounded-lg px-4 text-xs sm:text-sm font-title ${
            isSelected
               ? "bg-light-1 text-dark-1 dark:bg-dark-1 dark:text-light-1"
               : "border border-light-1 dark:border-dark-1 text-light-1 hover:bg-secondary-light  dark:text-dark-1 dark:hover:bg-secondary-dark"
         }`}
      >
         {name}
      </button>
   );
}
