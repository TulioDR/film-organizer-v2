type Props = {
   children: React.ReactNode;
};

export default function NowInfoContainer({ children }: Props) {
   return (
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-dark-bg-primary to-transparent">
         <div className="absolute left-4 bottom-4 w-1/2 space-y-2">
            {children}
         </div>
      </div>
   );
}
