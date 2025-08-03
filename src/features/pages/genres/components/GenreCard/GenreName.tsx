import React from "react";

type Props = {
   name: string;
};

export default function GenreName({ name }: Props) {
   return (
      <span className="text-lg text-white uppercase font-light">{name}</span>
   );
}
