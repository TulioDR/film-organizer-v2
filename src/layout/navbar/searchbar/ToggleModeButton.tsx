import useThemeContext from "@/context/ThemeContext";

type Props = {
   isMovie: boolean;
   onClick: () => void;
   showResults: boolean;
};

export default function ToggleModeButton({
   isMovie,
   onClick,
   showResults,
}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button
         onMouseDown={(e) => e.preventDefault()}
         type="button"
         onClick={onClick}
         className={`h-full px-2 flex items-center gap-1 relative group rounded-tr-lg ${
            showResults ? "" : "rounded-br-lg"
         }`}
         style={{ backgroundColor: themeColor }}
      >
         <div className="overflow-hidden relative">
            <div
               className={`flex items-center h-full duration-300 ${
                  isMovie ? "" : "-translate-x-full"
               }`}
            >
               <span className="material-icons">movie</span>
               <span className="material-icons absolute left-full">
                  smart_display
               </span>
            </div>
         </div>
         <div className="hidden absolute md:group-hover:flex items-center left-full">
            <div
               className="h-2 w-2 rotate-45"
               style={{ backgroundColor: themeColor }}
            ></div>
            <div
               className="rounded-md text-xs py-1 px-2 w-max -translate-x-1"
               style={{ backgroundColor: themeColor }}
            >
               Switch to {isMovie ? "Series" : "Movies"}
            </div>
         </div>
      </button>
   );
}
