type Props = {
   value: number;
   isSelected: boolean;
};

export default function CustomStep({ value, isSelected }: Props) {
   return (
      <div
         className={`w-px relative bg-background-accent-dark dark:bg-background-accent-light ${
            isSelected ? "h-full" : "h-6"
         }`}
      >
         {isSelected && (
            <div className="absolute top-full left-1/2 -translate-x-1/2">
               <span className="text-xs">{value}</span>
            </div>
         )}
      </div>
   );
}
