interface Props {
   children: React.ReactNode;
}

export default function Subtitle({ children }: Props) {
   return (
      <h4 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-wide font-title mb-5">
         {children}
      </h4>
   );
}
