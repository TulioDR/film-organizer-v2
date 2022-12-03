import React from "react";
import useSidebarContext from "../../context/SidebarContext";
import ToggleButton from "../ToggleButton";

export default function ToggleModeButton() {
   const { isMovie, toggle } = useSidebarContext();
   return (
      <button
         onClick={toggle}
         onMouseDown={(e) => e.preventDefault()}
         className="overflow-hidden select-none h-full w-full bg-blue-500 cursor-pointer flex items-center rounded-lg"
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
