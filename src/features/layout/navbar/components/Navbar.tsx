import Responsive from "@/common/components/Responsive";
import LoginButton from "./LoginButton";

import NavDropdown from "./NavDropdown";
import GlassContainer from "@/common/components/GlassContainer";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";

export default function Navbar() {
   return (
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

         <div className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase h-full flex items-center justify-center flex-1 lg:flex-initial">
            Agrios
         </div>

         <Responsive minWidth={LG_MEDIA_QUERY}>
            <div className="flex lg:gap-4 xl:gap-8 pointer-events-auto h-full">
               <LoginButton />
               <NavDropdown />
            </div>
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <GlassContainer
               el="button"
               className="flex items-center justify-center w-16 aspect-square"
            >
               <span className="material-symbols-outlined">menu</span>
            </GlassContainer>
         </Responsive>
      </div>
   );
}
