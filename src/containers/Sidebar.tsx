import { useState } from "react";
import BrandHamburger from "../components/sidebar/BrandHamburger";
import SideLink from "../components/sidebar/SideLink";

export default function Sidebar() {
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggle = () => {
      setIsOpen(!isOpen);
   };
   return (
      <div
         className={`h-screen sticky top-0 duration-300 pr-5 ${
            isOpen ? "w-60" : "w-[76px]"
         }`}
      >
         <BrandHamburger onClick={toggle} />
         <div className="h-9 w-full pl-3">
            <div className="h-full w-full pl-2 bg-blue-500 flex items-center rounded-lg space-x-5">
               <span className="material-icons">movie</span>
               <span className="truncate">Search Movies</span>
            </div>
         </div>

         <div className="ml-5 text-xs uppercase my-3">Menu</div>

         <ul className="space-y-3">
            <SideLink link="/" icon="home" text="Home" />
            <SideLink link="/popular" icon="whatshot" text="Popular" />
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
