import { useState } from "react";
import BrandHamburger from "../components/sidebar/BrandHamburger";
import SideLink from "../components/sidebar/SideLink";
import useMediaTypeContext from "../context/MediaTypeContext";

export default function Sidebar() {
   const { isMovie, toggle } = useMediaTypeContext();

   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggleSidebar = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div
         className={`h-screen sticky top-0 duration-300 pr-5 ${
            isOpen ? "w-60" : "w-[76px]"
         }`}
      >
         <BrandHamburger onClick={toggleSidebar} />
         <div className="h-9 w-full pl-3">
            <div
               onClick={toggle}
               className="h-full w-full pl-2 cursor-pointer bg-blue-500 flex items-center rounded-lg space-x-5"
            >
               <span className="material-icons">
                  {isMovie ? "movie" : "tv"}
               </span>
               <span className="truncate">
                  Mode: {isMovie ? "Movies" : "TV Shows"}
               </span>
            </div>
         </div>

         <div className="ml-5 text-xs uppercase my-3">Menu</div>

         <ul className="space-y-3">
            <SideLink link="/" icon="home" text="Home" />
            <SideLink
               link={`/popular?type=${isMovie ? "movie" : "tv"}`}
               icon="whatshot"
               text="Popular"
            />
            <SideLink
               link="/genres"
               icon="theater_comedy"
               text="Movies Genres"
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
