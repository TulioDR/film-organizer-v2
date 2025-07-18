type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr className="align-top">
         <td className="text-gray-600">{name}</td>
         <td>{value}</td>
      </tr>
   );
}
