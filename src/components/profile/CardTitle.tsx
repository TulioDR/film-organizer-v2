type Props = {
   children: React.ReactNode;
};

export default function CardTitle({ children }: Props) {
   return (
      <div className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-2">
         {children}
      </div>
   );
}
