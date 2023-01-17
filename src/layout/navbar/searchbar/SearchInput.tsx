import useSidebarContext from "../../../context/SidebarContext";

type Props = {
   value: string;
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   onBlur: () => void;
};

export default function SearchInput({
   value,
   onChange,
   onFocus,
   onBlur,
}: Props) {
   const { isMovie } = useSidebarContext();
   return (
      <div className="flex items-center h-full">
         <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            type="text"
            className="outline-none flex-1 bg-transparent pr-5 text-light-text-hard dark:text-dark-text-hard placeholder:text-light-text-soft placeholder:dark:text-dark-text-soft"
            placeholder={`Search ${isMovie ? "Movies" : "TV Shows"}`}
         />
         <span className="material-icons text-light-text-soft dark:text-dark-text-soft">
            search
         </span>
      </div>
   );
}
