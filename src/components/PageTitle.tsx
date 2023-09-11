import RevealHorizontal from "../animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
   return (
      <div className="overflow-hidden">
         <RevealHorizontal>
            <div className="text-xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold font-oswald text-light-1 dark:text-dark-1">
               {children}
            </div>
         </RevealHorizontal>
      </div>
   );
}
