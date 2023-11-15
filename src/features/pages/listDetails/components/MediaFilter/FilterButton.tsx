type Props = {
   children: React.ReactNode;
   isSelected: boolean;
   onClick: () => void;
};

export default function FilterButton({ children, isSelected, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-8 rounded-lg px-4 text-xs sm:text-sm w-max font-normal ${
            isSelected
               ? "bg-light-1 text-dark-1 dark:bg-dark-1 dark:text-light-1"
               : "border border-light-1 text-light-1 hover:bg-primary-light dark:border-dark-1 dark:text-dark-1 dark:hover:bg-primary-dark"
         }`}
      >
         {children}
      </button>
   );
}
