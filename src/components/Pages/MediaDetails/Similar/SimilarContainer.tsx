type Props = {
   children: React.ReactNode;
};

export default function SimilarContainer({ children }: Props) {
   return (
      <div className="sticky top-0 self-start overflow-y-auto pt-10 h-screen">
         <div className="mt-10 xl:mt-0 xl:border-l border-black dark:border-white xl:pl-10 w-full xl:w-80 2xl:w-96">
            {children}
         </div>
      </div>
   );
}
