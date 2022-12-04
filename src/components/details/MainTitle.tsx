import RevealHorizontal from "../../animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function MainTitle({ children }: Props) {
   return (
      <RevealHorizontal>
         <div className="text-2xl xl:text-4xl 2xl:text-5xl font-medium">
            {children}
         </div>
      </RevealHorizontal>
   );
}
