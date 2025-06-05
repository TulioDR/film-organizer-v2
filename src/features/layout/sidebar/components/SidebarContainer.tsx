import GlassContainer from "@/components/GlassContainer";

type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   return (
      <nav className="z-40 absolute h-[100svh] top-0 left-0 flex items-center justify-center w-32 pointer-events-none">
         <GlassContainer className="w-16 flex flex-col py-4 pointer-events-auto">
            {children}
         </GlassContainer>
      </nav>
   );
}
