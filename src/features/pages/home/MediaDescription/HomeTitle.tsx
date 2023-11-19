type Props = { children: React.ReactNode; upcoming?: boolean };

export default function HomeTitle({ children }: Props) {
   return (
      <div className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-title w-2/3 uppercase tracking-tight">
         {children}
      </div>
   );
}
