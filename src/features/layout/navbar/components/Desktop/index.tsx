import NavTitle from "../NavTitle";
import DarkModeButton from "./DarkModeButton";
import NavDropdown from "./NavDropdown";
import NavSearch from "./NavSearch";
import NavItems from "./NavItems";
import NavbarContainer from "../NavbarContainer";

type Props = {};

export default function Desktop({}: Props) {
   return (
      <NavbarContainer className="">
         <div className="flex items-center w-[410px]">
            <NavTitle />
         </div>
         <div className="flex flex-1 justify-between pl-4">
            <NavItems />
            <div className="flex gap-4 h-full items-center">
               <NavSearch />
               <NavDropdown />
               <DarkModeButton />
            </div>
         </div>
      </NavbarContainer>
   );
}
