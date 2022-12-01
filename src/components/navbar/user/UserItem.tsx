type Props = {
   onClick: () => void;
   children: React.ReactNode;
};

export default function UserItem({ onClick, children }: Props) {
   return (
      <li
         className="px-2 h-9 w-full hover:bg-gray-600 flex items-center cursor-pointer"
         onClick={onClick}
      >
         {children}
      </li>
   );
}
