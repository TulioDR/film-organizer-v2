type Props = {
   children: React.ReactNode;
   dark?: true;
};

export default function AuthSubmitButton({ dark, children }: Props) {
   return (
      <button
         type="submit"
         className={`text-sm font-semibold py-3 w-full 
            ${
               dark
                  ? "bg-primary-light text-light-1"
                  : "bg-secondary-dark text-dark-1"
            }`}
      >
         {children}
      </button>
   );
}
