type Props = {
   name: string;
   value: React.ReactNode;
};

export default function Row({ name, value }: Props) {
   return (
      <tr>
         <td className="pr-4 text-light-text-soft dark:text-dark-text-soft py-2">
            {name}
         </td>
         <td className="text-light-text-normal dark:text-dark-text-normal">
            {value}
         </td>
      </tr>
   );
}
