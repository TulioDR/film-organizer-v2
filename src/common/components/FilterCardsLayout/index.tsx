import MainFilter from "@/features/mainFilter/components/MainFilter";

type Props = {
   title: string;
   compactFilter: React.ReactNode;
   expandedFilter?: React.ReactNode;
   children: React.ReactNode;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterCardsLayout({
   title,
   compactFilter,
   expandedFilter,
   children,
   isOpen,
   setIsOpen,
}: Props) {
   return (
      <>
         <MainFilter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={title}
            compactContent={compactFilter}
            expandedContent={expandedFilter}
         />
         <div className="overflow-hidden py-14 px-4 lg:px-32 xl:mt-20 xl:pt-64 xl:pb-24">
            <div className={`w-full ${isOpen ? "xl:pl-[426px]" : ""}`}>
               {children}
            </div>
         </div>
      </>
   );
}
