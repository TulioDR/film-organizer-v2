type Props = {
   children: React.ReactNode;
};

export default function TitleContainer({ children }: Props) {
   return (
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-2 sm:gap-0 mb-5">
         {children}
      </div>
   );
}
