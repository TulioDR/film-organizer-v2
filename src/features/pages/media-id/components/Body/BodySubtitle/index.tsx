interface Props {
   children: React.ReactNode;
}

export default function BodySubtitle({ children }: Props) {
   return (
      <h4 className="text-2xl xl:text-3xl 2xl:text-4xl tracking-wide font-title text-black dark:text-white">
         {children}
      </h4>
   );
}
