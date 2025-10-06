import Responsive from "@/common/components/Responsive";
import LoginButton from "./LoginButton";

import NavDropdown from "./NavDropdown";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import NavTitle from "./NavTitle";
import MobileMenu from "../../mobile-menu/components/MobileMenu";
import MobileNav from "./MobileNav";
import MobileSearchbar from "./Searchbar/MobileSearchbar";
import DesktopSearchbar from "./Searchbar/DesktopSearchbar";

export default function Navbar() {
   return (
      <>
         <div
            id="navbar"
            className="w-full z-20 absolute top-0 h-16 flex justify-between items-center pointer-events-none"
         >
            <NavTitle />

            <Responsive minWidth={LG_MEDIA_QUERY}>
               <div className="flex lg:gap-4 xl:gap-8 pointer-events-auto h-full">
                  <LoginButton />
                  <NavDropdown />
               </div>
            </Responsive>
         </div>

         <Responsive minWidth={LG_MEDIA_QUERY}>
            <DesktopSearchbar />
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <MobileMenu position="topLeft" buttonIcon="search">
               <MobileSearchbar />
            </MobileMenu>
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <MobileMenu position="topRight" buttonIcon="menu">
               <MobileNav />
            </MobileMenu>
         </Responsive>
      </>
   );
}
