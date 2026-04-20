import SearchKey from "./SearchKey";

type Props = {};

export default function SearchKeys({}: Props) {
   return (
      <div className="p-4 flex items-center justify-between w-full border-t border-border-light dark:border-border-dark">
         <div className="flex gap-4">
            <div className="flex gap-2 items-center">
               <SearchKey icon="arrow_drop_up" className="aspect-square" />
               <SearchKey icon="arrow_left" className="aspect-square" />
               <SearchKey icon="arrow_drop_down" className="aspect-square" />
               <SearchKey icon="arrow_right" className="aspect-square" />
               <span className="text-sm tracking-widest">To Navigate</span>
            </div>
            <div className="flex gap-2 items-center">
               <SearchKey icon="keyboard_return" className="w-7" />
               <span className="text-sm tracking-widest">To Select</span>
            </div>
         </div>
         <div className="flex gap-2 items-center">
            <SearchKey text="esc" className="w-9" />
            <span className="text-sm tracking-widest">Exit Search</span>
         </div>
      </div>
   );
}
