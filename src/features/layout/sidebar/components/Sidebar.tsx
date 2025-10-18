import Responsive from "@/common/components/Responsive";
import { NAVIGATION_ITEMS } from "../constants/NAVIGATION_ITEMS";
import SidebarContainer from "./SidebarContainer";
import SidebarItem from "./SidebarItem";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import MobileMenu from "../../mobile-menu/components/MobileMenu";
import MobileSidebar from "./MobileSidebar";

export default function Sidebar() {
   return (
      <>
         <Responsive minWidth={LG_MEDIA_QUERY}>
            <SidebarContainer>
               {NAVIGATION_ITEMS.map((item) => (
                  <SidebarItem key={item.link} item={item} />
               ))}
            </SidebarContainer>
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <MobileMenu position="topRight" buttonIcon="menu">
               <MobileSidebar />
            </MobileMenu>
         </Responsive>
      </>
   );
}
