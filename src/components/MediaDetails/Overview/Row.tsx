type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr>
         <td className="pr-4 text-text-3 py-2">{name}</td>
         <td className="text-text-2">{value}</td>
      </tr>
   );
}
