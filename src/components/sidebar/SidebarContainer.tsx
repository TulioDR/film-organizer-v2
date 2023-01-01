import useSidebarContext from "../../context/SidebarContext";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   const { openSidebar } = useSidebarContext();
   return (
      <div
         className={`h-screen sticky top-0 duration-200 text-sm font-semibold ${
            openSidebar ? "w-60 lg:w-56" : "w-16"
         }`}
      >
         <div className="w-full h-full py-5 pr-5 lg:pr-2 hover:lg:pr-0 overflow-y-hidden hover:overflow-y-scroll sidebar-scrollbar">
            {children}
         </div>
      </div>
   );
}
