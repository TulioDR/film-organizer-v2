type Props = {
   value: string;
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   onBlur: () => void;
   placeholder: string;
};

export default function SearchInput({
   value,
   onChange,
   onFocus,
   onBlur,
   placeholder,
}: Props) {
   return (
      <div
         className={`flex items-center w-full sm:w-80 gap-5 pl-2 pr-5 h-full text-sm sm:text-base`}
      >
         <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            type="text"
            className="w-full outline-none bg-transparent text-text-1 placeholder:text-text-2"
            placeholder={placeholder}
         />
         <span className="material-icons !text-text-2">search</span>
      </div>
   );
}
