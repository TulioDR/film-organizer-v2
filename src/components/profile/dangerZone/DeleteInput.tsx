import { useUser } from "@supabase/auth-helpers-react";

type Props = {
   setEnableDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DeleteInput({ setEnableDelete }: Props) {
   const user = useUser()!;
   const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      if (value === user.email) setEnableDelete(true);
      else setEnableDelete(false);
   };
   return (
      <div className="text-sm">
         <input
            onChange={handleOnChange}
            type="text"
            placeholder="Type your email here"
            className="px-3 py-2 rounded-lg w-72 outline-none bg-light-bg-primary dark:bg-dark-bg-primary placeholder:text-light-text-soft dark:placeholder:text-dark-text-soft"
         />
      </div>
   );
}
