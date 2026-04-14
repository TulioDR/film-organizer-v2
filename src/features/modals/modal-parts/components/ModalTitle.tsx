type Props = {
   children: React.ReactNode;
};

export default function ModalTitle({ children }: Props) {
   return (
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center text-black dark:text-white font-thin">
         {children}
      </div>
   );
}
