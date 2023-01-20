type Props = { children: React.ReactNode };

export default function SideButtonContainer({ children }: Props) {
   return (
      <div className="h-9 w-full pl-5">
         <div className="rounded-lg overflow-hidden h-full">{children}</div>
      </div>
   );
}
