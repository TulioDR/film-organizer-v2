import MobileMenu from "@/features/layout/mobile-menu/components/MobileMenu";
import Handler from "./Handler";
import Menu from "./Menu";

type Props = {
   currentPage: number;
   total: number;
};

export default function MobilePagination({ currentPage, total }: Props) {
   return (
      <MobileMenu
         position="bottomLeft"
         renderItem={({ toggleMenu, isOpen }) => (
            <Handler
               isOpen={isOpen}
               toggleMenu={toggleMenu}
               currentPage={currentPage}
               total={total}
            />
         )}
      >
         <Menu total={total} currentPage={currentPage} />
      </MobileMenu>
   );
}
