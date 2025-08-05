import GlassContainer from "@/common/components/GlassContainer";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   return (
      <div className="flex items-center w-16 pointer-events-none h-[100svh] z-40 absolute top-0 left-0">
         <GlassContainer
            el="nav"
            className="w-16 flex flex-col py-4 pointer-events-auto"
         >
            {children}
         </GlassContainer>
      </div>
   );
}
