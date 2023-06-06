type Props = {
   children: React.ReactNode;
};

export default function Subtitle({ children }: Props) {
   return (
      <div className="mt-2 text-lg font-medium text-dark-text-normal">
         {children}
      </div>
   );
}
