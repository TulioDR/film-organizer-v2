type Props = {
   children: React.ReactNode;
};

export default function FilterSubtitle({ children }: Props) {
   return (
      <div className="text-light-1 dark:text-dark-1 text-xs sm:text-sm font-title">
         {children}
      </div>
   );
}
