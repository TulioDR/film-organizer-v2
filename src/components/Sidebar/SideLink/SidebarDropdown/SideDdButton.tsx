type Props = {
   onClick: () => void;
};

export default function SideDdButton({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="flex items-center justify-between w-full "
      ></button>
   );
}
