type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr>
         <td className="pr-4 text-dark-text-soft py-2">{name}</td>
         <td className="text-dark-text-normal">{value}</td>
      </tr>
   );
}
