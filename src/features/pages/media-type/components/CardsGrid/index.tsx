import useScrollToTop from "@/common/hooks/useScrollToTop";

type Props = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function CardsGrid({ children, isOpen }: Props) {
   useScrollToTop();

   return (
      <div
         className={`py-14 xl:py-0 xl:pt-4 grid gap-1 xl:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${
            isOpen
               ? "xl:grid-cols-2 min-[1400px]:grid-cols-3 min-[1700px]:grid-cols-4"
               : "xl:grid-cols-3 min-[1400px]:grid-cols-4 min-[1700px]:grid-cols-5"
         }`}
      >
         {children}
      </div>
   );
}
