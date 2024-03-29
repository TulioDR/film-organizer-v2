import RevealHorizontal from "@/animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function SeasonTitle({ children }: Props) {
   return (
      <RevealHorizontal stagger>
         <div className="text-4xl 2xl:text-5xl font-semibold text-white">
            {children}
         </div>
      </RevealHorizontal>
   );
}
