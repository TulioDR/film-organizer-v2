type Props = {
   children: React.ReactNode;
};

export default function SeasonSubtitle({ children }: Props) {
   return (
      <div className="my-5 text-white text-2xl 2xl:text-3xl font-medium">
         {children}
      </div>
   );
}
