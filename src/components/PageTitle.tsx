import RevealHorizontal from "../animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
   return (
      <div className="overflow-hidden">
         <RevealHorizontal>
            <div className="text-xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold font-oswald mb-5">
               {children}
            </div>
         </RevealHorizontal>
      </div>
   );
}
