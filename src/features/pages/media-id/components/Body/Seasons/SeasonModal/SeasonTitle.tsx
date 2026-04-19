type Props = {
   children: React.ReactNode;
};

export default function SeasonTitle({ children }: Props) {
   return (
      <div className="text-4xl 2xl:text-5xl font-light text-black dark:text-white">
         {children}
      </div>
   );
}
