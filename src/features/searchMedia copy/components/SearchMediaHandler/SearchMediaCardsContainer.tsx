type Props = {
   children: React.ReactNode;
};

export default function SearchMediaCardsContainer({ children }: Props) {
   return (
      <div
         className={`gap-8 grid grid-cols-2 md:grid-cols-3  ${
            true
               ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         }`}
      >
         {children}
      </div>
   );
}
