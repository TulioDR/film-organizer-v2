import RevealHorizontal from "../../../../animations/RevealHorizontal";

type Props = {
   children: React.ReactNode;
};

export default function SeasonSubtitle({ children }: Props) {
   return (
      <RevealHorizontal stagger>
         <div className="my-8 text-light-text-hard dark:text-dark-text-hard text-3xl 2xl:text-4xl font-medium">
            {children}
         </div>
      </RevealHorizontal>
   );
}
