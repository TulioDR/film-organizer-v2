type Props = {
   children: React.ReactNode;
};

export default function TitleContainer({ children }: Props) {
   return (
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2 sm:gap-0 mb-5">
         {children}
      </div>
   );
}
