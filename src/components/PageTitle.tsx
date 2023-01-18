import RevealHorizontal from "../animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
   return (
      <div className="overflow-hidden">
         <RevealHorizontal>
            <div className="text-xl md:text-3xl 2xl:text-4xl font-bold mb-2">
               {children}
            </div>
         </RevealHorizontal>
      </div>
   );
}
