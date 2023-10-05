type Props = {
   children: React.ReactNode;
};

export default function TitleContainer({ children }: Props) {
   return (
      <div className="flex justify-between items-end pb-5 overflow-hidden">
         {children}
      </div>
   );
}
