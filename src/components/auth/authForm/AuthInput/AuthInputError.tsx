type Props = {
   message: string;
};

export default function AuthInputError({ message }: Props) {
   return <div className="w-full text-red-600 text-sm truncate">{message}</div>;
}
