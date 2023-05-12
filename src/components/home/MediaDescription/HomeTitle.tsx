type Props = { children: React.ReactNode; upcoming?: boolean };

export default function HomeTitle({ children }: Props) {
   return (
      <div className="text-4xl 2xl:text-5xl font-bold w-2/3 uppercase tracking-tight">
         {children}
      </div>
   );
}
