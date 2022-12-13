import ToggleModeButton from "./ToggleModeButton";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
   expand?: boolean;
   darkMode?: boolean;
   icon: JSX.Element;
   isDark?: boolean;
};

export default function UserItem({
   onClick,
   children,
   expand,
   icon,
   darkMode,
   isDark,
}: Props) {
   return (
      <li
         className="px-2 h-9 w-full hover:bg-gray-400 dark:hover:bg-gray-600 flex items-center justify-between cursor-pointer rounded-md"
         onClick={onClick}
      >
         <div className="flex items-center space-x-2 h-full">
            {icon}
            <span className="capitalize">{children}</span>
         </div>
         {expand && <span className="material-icons">chevron_right</span>}
         {darkMode && <ToggleModeButton isOn={isDark!} />}
      </li>
   );
}
