import ToggleSidebar from "../../components/ToggleSidebar";
import useSidebarContext from "../../context/SidebarContext";

type Props = {};

export default function BrandHamburger({}: Props) {
   const { toggleOpenSidebar, toggleShowSidebar } = useSidebarContext();

   return (
      <div className="flex items-center pl-10 h-9">
         <div className="hidden lg:block">
            <ToggleSidebar onClick={toggleOpenSidebar} />
         </div>
         <div className="lg:hidden">
            <ToggleSidebar onClick={toggleShowSidebar} />
         </div>
         <span className="text-4xl font-bold truncate ml-3">GII</span>
      </div>
   );
}
