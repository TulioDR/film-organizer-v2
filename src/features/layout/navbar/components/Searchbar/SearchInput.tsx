type Props = {
   value: string;
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   onBlur: () => void;
   placeholder: string;
   showResults: boolean;
};

export default function SearchInput({
   value,
   onChange,
   onFocus,
   onBlur,
   placeholder,
   showResults,
}: Props) {
   return (
      <div className="overflow-hidden w-96 h-full flex-shrink-0 flex items-center pr-4">
         <div className="h-full aspect-square flex items-center justify-center">
            <span className="material-symbols-outlined !text-text-2 !text-light-2 dark:!text-dark-2">
               search
            </span>
         </div>
         <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            type="text"
            className="text-xs sm:text-sm md:text-base flex-1 outline-none bg-transparent text-light-1 dark:text-dark-1 placeholder:text-light-2 dark:placeholder:text-dark-2"
            placeholder={placeholder}
         />
      </div>
   );
}
