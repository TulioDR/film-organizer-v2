import InnerCustomPagination from "./InnerCustomPagination";
type Props = {
   total: number;
   value: number;
   onChange: (page: number) => void;
};

export default function CustomPagination({ total, value, onChange }: Props) {
   return (
      <InnerCustomPagination value={value} total={total} onChange={onChange} />
   );
}
