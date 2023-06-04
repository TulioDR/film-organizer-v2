import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   const { expandSidebar, revealSidebar } = useSelector(
      (state: any) => state.sidebar
   );
   return (
      <div
         className={`fixed top-0 left-0 lg:static z-50 duration-300 ${
            revealSidebar ? "" : "-translate-x-full lg:translate-x-0"
         }`}
      >
         <div
            className={`h-screen sticky top-0 duration-200 font-semibold backdrop-blur-md ${
               expandSidebar ? "w-60" : "w-[116px]"
            }`}
         >
            <div className="w-full h-full py-10 pr-10 hover:pr-8 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll sidebar-scrollbar space-y-5">
               {children}
            </div>
         </div>
      </div>
   );
}
