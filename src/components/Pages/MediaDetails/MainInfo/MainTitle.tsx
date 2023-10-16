type Props = {
   children: React.ReactNode;
};

export default function MainTitle({ children }: Props) {
   return (
      <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-title uppercase leading-tight text-end md:text-start">
         {children}
      </h1>
   );
}
