type Props = {
   children: React.ReactNode;
};

export default function SimilarContainer({ children }: Props) {
   return (
      <div className="sticky top-0 self-start xl:h-screen pb-10 pt-0 xl:pt-10">
         <div className="h-full overflow-y-auto main-scrollbar xl:border-l border-light-1 dark:border-dark-1 xl:px-5 2xl:px-10 w-full xl:w-80 2xl:w-96">
            {children}
         </div>
      </div>
   );
}
