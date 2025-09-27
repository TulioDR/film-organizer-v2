import Responsive from "@/common/components/Responsive";
import LoginButton from "./LoginButton";

import NavDropdown from "./NavDropdown";
import GlassContainer from "@/common/components/GlassContainer";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import NavTitle from "./NavTitle";
import MobileNav from "./MobileNav";

export default function Navbar() {
   return (
      <>
         <div
            id="navbar"
            className="w-full z-20 absolute top-0 h-16 flex justify-between items-center pointer-events-none"
         >
            <Responsive maxWidth={LG_MEDIA_QUERY}>
               <GlassContainer
                  el="button"
                  className="flex items-center justify-center w-16 aspect-square"
               >
                  <span className="material-symbols-outlined">search</span>
               </GlassContainer>
            </Responsive>

            <NavTitle />

            <Responsive minWidth={LG_MEDIA_QUERY}>
               <div className="flex lg:gap-4 xl:gap-8 pointer-events-auto h-full">
                  <LoginButton />
                  <NavDropdown />
               </div>
            </Responsive>
         </div>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <MobileNav />
         </Responsive>
      </>
   );
}
