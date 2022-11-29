import { useState } from "react";
import BrandHamburger from "../components/sidebar/BrandHamburger";
import SideLink from "../components/sidebar/SideLink";
import ToggleButton from "../components/ToggleButton";
import useMediaTypeContext from "../context/MediaTypeContext";

export default function Sidebar() {
   const { isMovie, toggle } = useMediaTypeContext();

   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggleSidebar = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div
         className={`h-screen sticky top-0 duration-300 pr-5 text-sm font-semibold ${
            isOpen ? "w-60" : "w-[76px]"
         }`}
      >
         <BrandHamburger onClick={toggleSidebar} />
         <div className="h-9 w-full pl-5">
            <div
               onClick={toggle}
               className="overflow-hidden select-none h-full w-full bg-blue-500 cursor-pointer flex items-center justify-between rounded-lg"
            >
               <div className="w-9 h-9 flex justify-center items-center mr-3 flex-shrink-0">
                  <span className="material-icons ">
                     {isMovie ? "movie" : "tv"}
                  </span>
               </div>
               <span className="truncate flex-1">
                  Mode: {isMovie ? "Movies" : "TV"}
               </span>
               <ToggleButton isOn={isMovie} />
            </div>
         </div>

         <div className="ml-5 text-xs uppercase my-3 text-gray-400">Menu</div>

         <ul className="space-y-3">
            <SideLink link="/" icon="home" text="Home" />
            <SideLink
               link={`/popular/${isMovie ? "movie" : "tv"}`}
               icon="whatshot"
               text={`Popular ${isMovie ? "Movies" : "TV Shows"}`}
            />
            <SideLink
               link={`/genres/${isMovie ? "movie" : "tv"}`}
               icon="theater_comedy"
               text={`${isMovie ? "Movie" : "TV"} Genres`}
            />
            <SideLink link="/discover" icon="travel_explore" text="Discover" />
            <SideLink
               link="/manage"
               icon="format_list_bulleted"
               text="Manage Lists"
            />
         </ul>
      </div>
   );
}
