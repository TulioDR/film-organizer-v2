import SideLink from "./SideLink";
import SideItemsContainer from "./SideItemsContainer";
import ModalPortal from "@/components/Modals/ModalPortal";

type Props = {
   open: boolean;
   tooltipPosition: any;
   items?: any[];
   text: string;
};

export default function SideTooltip({
   open,
   tooltipPosition,
   items,
   text,
}: Props) {
   return (
      <ModalPortal isOpen={open}>
         <SideItemsContainer open={open} tooltip tagPosition={tooltipPosition}>
            <div className="text-base h-10 flex items-center w-max">{text}</div>
            {items && (
               <ul className="space-y-2 py-2">
                  {items.map((item, index) => (
                     <SideLink
                        key={index}
                        link={item.link}
                        icon={item.icon}
                        text={item.text}
                        hideIcon
                     />
                  ))}
               </ul>
            )}
         </SideItemsContainer>
      </ModalPortal>
   );
}
