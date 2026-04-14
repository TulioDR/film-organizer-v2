import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function ModalButtonsContainer({ children }: Props) {
   return <div className="w-full flex justify-end gap-2">{children}</div>;
}
