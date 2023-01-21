import CardTitle from "./CardTitle";
import DeleteAccountButton from "./DeleteAccountButton";

type Props = {};

export default function DangerZoneCard({}: Props) {
   return (
      <div className="w-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-xl rounded-xl p-5">
         <CardTitle>Danger Zone</CardTitle>
         <DeleteAccountButton />
      </div>
   );
}
