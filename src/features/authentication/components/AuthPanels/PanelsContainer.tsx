type Props = {
   children: React.ReactNode;
   showPanel: boolean;
};

export default function PanelsContainer({ children, showPanel }: Props) {
   return (
      <div
         className={`hidden md:block z-10 h-full w-1/2 absolute top-0 left-0 duration-1000 overflow-hidden ${
            showPanel ? "translate-x-full" : ""
         }`}
      >
         <div
            className={`min-w-[200%] relative bg-gradient-to-r from-orange-800 to-orange-600 h-full flex duration-1000 ${
               showPanel ? "-translate-x-1/2" : ""
            }`}
         >
            {children}
         </div>
      </div>
   );
}
