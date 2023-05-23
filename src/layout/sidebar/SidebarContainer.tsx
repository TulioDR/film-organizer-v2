import useSidebarContext from "../../context/SidebarContext";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   const { openSidebar } = useSidebarContext();
   return (
      <div
         className={`h-screen sticky top-0 duration-200 font-semibold backdrop-blur-md ${
            openSidebar ? "w-60" : "w-[116px]"
         }`}
      >
         <div className="w-full h-full py-10 pr-10 hover:pr-8 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll sidebar-scrollbar space-y-5">
            {children}
         </div>
      </div>
   );
}
