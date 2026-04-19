type Props = {
   children: React.ReactNode;
};

export default function SeasonSubtitle({ children }: Props) {
   return (
      <div className="text-black dark:text-white text-2xl 2xl:text-3xl font-light">
         {children}
      </div>
   );
}
