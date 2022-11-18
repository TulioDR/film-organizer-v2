type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr>
         <td className="pr-4 text-gray-500 dark:text-gray-400 py-2">{name}</td>
         <td>{value}</td>
      </tr>
   );
}
