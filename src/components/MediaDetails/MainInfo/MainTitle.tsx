type Props = {
   children: React.ReactNode;
};

export default function MainTitle({ children }: Props) {
   return (
      <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-medium font-oswald leading-tight">
         {children}
      </h1>
   );
}
