export const separateByCommas = (array: any[], index: number): string => {
   if (index === array.length - 1) {
      return ".";
   } else return ",";
};
export const separateArray = (array: any[]): JSX.Element[] => {
   return array.map((item, index) => (
      <span key={item.id} className="mr-2 inline-block">
         {item.name}
         {separateByCommas(array, index)}
      </span>
   ));
};
