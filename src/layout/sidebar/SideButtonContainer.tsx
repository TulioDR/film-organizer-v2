type Props = { children: React.ReactNode };

export default function SideButtonContainer({ children }: Props) {
   return (
      <div className="w-full pl-10">
         <div className="rounded-lg overflow-hidden h-full">{children}</div>
      </div>
   );
}
