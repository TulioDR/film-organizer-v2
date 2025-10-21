type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr className="align-top">
         <td className="text-gray-700 dark:text-gray-300">{name}</td>
         <td className="text-black dark:text-white">{value}</td>
      </tr>
   );
}
