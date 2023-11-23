type Props = {
   children: React.ReactNode;
};

export default function ModalTitle({ children }: Props) {
   return (
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 text-center text-light-1 dark:text-dark-1 font-title">
         {children}
      </div>
   );
}
