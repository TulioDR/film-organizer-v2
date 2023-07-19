type Props = {
   onClick: () => void;
};

export default function GoBackButton({ onClick }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="text-xs sm:text-sm hover:underline"
      >
         Go Back
      </button>
   );
}
