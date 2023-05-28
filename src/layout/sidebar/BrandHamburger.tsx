import { useDispatch } from "react-redux";
import ToggleSidebar from "../../components/ToggleSidebar";
import { sidebarActions } from "@/store/slices/sidebar-slice";

type Props = {};

export default function BrandHamburger({}: Props) {
   const dispatch = useDispatch();
   const toggleReveal = () => dispatch(sidebarActions.toggleReveal());
   const toggleExpand = () => dispatch(sidebarActions.toggleExpanded());

   return (
      <div className="flex items-center pl-10 h-9">
         <div className="hidden lg:block">
            <ToggleSidebar onClick={toggleExpand} />
         </div>
         <div className="lg:hidden">
            <ToggleSidebar onClick={toggleReveal} />
         </div>
         <span className="text-4xl font-bold truncate ml-3">GII</span>
      </div>
   );
}
