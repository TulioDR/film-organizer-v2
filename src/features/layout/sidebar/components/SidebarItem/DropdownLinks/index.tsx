import React from "react";
import DropdownItemModel from "../../../models/DropdownItemModel";
import DropdownItem from "./DropdownItem";

type Props = {
   items: DropdownItemModel[];
   isMainSelected: boolean;
};

export default function DropdownLinks({ items, isMainSelected }: Props) {
   return (
      <div className="pb-4 px-2 bg-white absolute top-full left-full w-40 rounded-br-md translate-x-0.5">
         {items.map((item, index) => (
            <DropdownItem
               key={index}
               link={item.link}
               icon={item.icon}
               text={item.text}
               isMainSelected={isMainSelected}
            />
         ))}
      </div>
   );
}
