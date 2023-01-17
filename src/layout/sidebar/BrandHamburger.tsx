import ToggleSidebar from "../../components/ToggleSidebar";
import useSidebarContext from "../../context/SidebarContext";

type Props = {};

export default function BrandHamburger({}: Props) {
   const { toggleOpenSidebar, toggleShowSidebar } = useSidebarContext();

   return (
      <div className="flex items-center pb-5 pl-5">
         <div className="hidden lg:block">
            <ToggleSidebar onClick={toggleOpenSidebar} />
         </div>
         <div className="lg:hidden">
            <ToggleSidebar onClick={toggleShowSidebar} />
         </div>
         <span className="text-xl font-bold truncate ml-3">Film Organizer</span>
      </div>
   );
}
