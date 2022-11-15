import RevealHorizontal from "../animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
   return (
      <RevealHorizontal>
         <div className="text-2xl font-bold mb-2">{children}</div>
      </RevealHorizontal>
   );
}
