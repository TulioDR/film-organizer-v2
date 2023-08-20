type Props = {
   children: React.ReactNode;
   login?: true;
   register?: true;
   reset?: true;
};

export default function AuthSubmitButton({
   login,
   register,
   reset,
   children,
}: Props) {
   return (
      <button
         type="submit"
         className={`text-sm font-semibold py-3 w-96
               ${login ? "bg-secondary-dark text-dark-1" : ""}
               ${register ? "bg-primary-light text-light-1" : ""}
               ${reset ? "bg-primary-light text-light-1" : ""}
            `}
      >
         {children}
      </button>
   );
}
