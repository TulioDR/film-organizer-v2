import React from "react";
import ToggleButton from "../../components/ToggleButton";
import useSidebarContext from "../../context/SidebarContext";

export default function ToggleModeButton() {
   const { isMovie, toggle } = useSidebarContext();
   return (
      <button
         onClick={toggle}
         onMouseDown={(e) => e.preventDefault()}
         // style={{ backgroundColor: themeColor }}
         className="overflow-hidden select-none h-full w-full cursor-pointer flex items-center space-x-5"
      >
         <span className="material-icons ">{isMovie ? "movie" : "tv"}</span>
         <span className="truncate flex-1 text-left">
            {isMovie ? "Movies" : "Series"}
         </span>
         <ToggleButton isOn={isMovie} />
      </button>
   );
}
