type Props = {
   icon: string;
   text: string;
};

export default function InnerSideLink({ icon, text }: Props) {
   return (
      <div className="flex items-center gap-3 h-9">
         <span className="material-icons !w-9 !text-center !flex-shrink-0">
            {icon}
         </span>
         <span className="flex-shrink-0">{text}</span>
      </div>
   );
}
