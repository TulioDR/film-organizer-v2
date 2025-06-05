type Props = {
   children: React.ReactNode;
};

export default function BottomInfoContainer({ children }: Props) {
   return (
      <div className="bg-primary-light -mt-24 dark:bg-primary-dark px-3 sm:px-10 rounded-md xl:flex gap-5 2xl:gap-10 shadow-2xl sticky top-0">
         {children}
      </div>
   );
}
