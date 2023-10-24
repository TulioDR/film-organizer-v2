type Props = {
   children: React.ReactNode;
};

export default function PanelContainer({ children }: Props) {
   return (
      <div className="w-1/2 h-full grid place-content-center">
         <div className="w-full sm:w-96 p-5 sm:p-0 flex flex-col items-center gap-5 text-white">
            {children}
         </div>
      </div>
   );
}
