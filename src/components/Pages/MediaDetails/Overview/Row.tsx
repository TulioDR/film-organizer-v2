type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr>
         <td className="pr-4 text-light-2 dark:text-dark-2 py-2">{name}</td>
         <td>{value}</td>
      </tr>
   );
}
