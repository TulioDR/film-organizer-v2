type Props = {
   text: string;
};

export default function NoListsMessage({ text }: Props) {
   return <div className="text-black dark:text-white">{text}</div>;
}
