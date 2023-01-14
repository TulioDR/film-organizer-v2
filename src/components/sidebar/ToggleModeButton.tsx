import React from "react";
import useSidebarContext from "../../context/SidebarContext";
import useThemeContext from "../../context/ThemeContext";
import ToggleButton from "../ToggleButton";

export default function ToggleModeButton() {
   const { isMovie, toggle } = useSidebarContext();
   const { themeColor } = useThemeContext();
   return (
      <button
         onClick={toggle}
         onMouseDown={(e) => e.preventDefault()}
         style={{ backgroundColor: themeColor }}
         className="overflow-hidden select-none h-full w-full cursor-pointer flex items-center"
      >
         <div className="w-9 h-9 flex justify-center items-center mr-3 flex-shrink-0">
            <span className="material-icons ">{isMovie ? "movie" : "tv"}</span>
         </div>
         <span className="truncate flex-1 text-left">
            Mode: {isMovie ? "Movies" : "TV"}
         </span>
         <ToggleButton isOn={isMovie} />
      </button>
   );
}
