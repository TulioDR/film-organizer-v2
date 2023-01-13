type Props = {
   onClick: () => void;
   children: React.ReactNode;
   expand?: boolean;
   icon: JSX.Element;
};

export default function DropdownItem({
   onClick,
   children,
   expand,
   icon,
}: Props) {
   return (
      <li
         className="px-2 h-9 w-full hover:bg-light-bg-primary dark:hover:bg-gray-600 flex items-center justify-between cursor-pointer rounded-md"
         onClick={onClick}
      >
         <div className="flex items-center space-x-2 h-full w-full">
            {icon}
            <span className="capitalize w-full h-full flex items-center">
               {children}
            </span>
         </div>
         {expand && <span className="material-icons">chevron_right</span>}
      </li>
   );
}
