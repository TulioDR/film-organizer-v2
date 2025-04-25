import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import GlassContainer from "@/components/GlassContainer";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   const { revealSidebar } = useSelector((state: StoreModel) => state.sidebar);
   return (
      <div
         id="sidebar"
         className="z-40 fixed h-[100svh] top-0 left-0 flex items-center justify-center w-32"
      >
         <GlassContainer className="w-16 flex flex-col py-4">
            {children}
         </GlassContainer>
      </div>
   );
}
