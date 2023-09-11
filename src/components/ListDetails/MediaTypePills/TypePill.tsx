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
   return (
      <button
         onClick={() => setSelectedType(type)}
         className={`rounded-full py-1 px-4 shadow-xl text-sm ${
            type === selectedType
               ? "bg-secondary-dark text-dark-1 dark:text-light-1 dark:bg-secondary-light"
               : "bg-secondary-light dark:bg-secondary-dark text-light-1 dark:text-dark-1"
         }`}
      >
         {name}
      </button>
   );
}
