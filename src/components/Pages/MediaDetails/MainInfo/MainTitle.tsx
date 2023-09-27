type Props = {
   children: React.ReactNode;
};

export default function MainTitle({ children }: Props) {
   return (
      <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-title uppercase leading-tight text-end md:text-start">
         {children}
      </h1>
   );
}
