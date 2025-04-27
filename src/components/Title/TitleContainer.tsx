type Props = {
   children: React.ReactNode;
};

export default function TitleContainer({ children }: Props) {
   return (
      <div className=" flex justify-between items-center md:items-end gap-2 sm:gap-0 mb-8">
         {children}
      </div>
   );
}
