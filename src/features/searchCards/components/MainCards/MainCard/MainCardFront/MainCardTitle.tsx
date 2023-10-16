type Props = {
   children: React.ReactNode;
};

export default function MainCardTitle({ children }: Props) {
   return (
      <div className="absolute top-0 left-0 grid place-content-center w-full h-full p-5 translate-x-full group-hover:translate-x-0 duration-500">
         <span className="text-base sm:text-lg uppercase font-title text-dark-1 text-center tracking-wider ">
            {children}
         </span>
      </div>
   );
}
