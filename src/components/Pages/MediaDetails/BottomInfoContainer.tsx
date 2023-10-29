type Props = {
   children: React.ReactNode;
};

export default function BottomInfoContainer({ children }: Props) {
   return (
      <div className="bg-primary-light dark:bg-primary-dark px-5 sm:px-10 rounded-3xl xl:flex gap-5 2xl:gap-10 shadow-2xl sticky top-0">
         {children}
      </div>
   );
}
