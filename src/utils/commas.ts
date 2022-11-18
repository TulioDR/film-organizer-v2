export const addCommasToNumber = (number: number): string => {
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const separateByCommas = (array: any[], index: number): string => {
   if (index === array.length - 1) {
      return ".";
   } else return ",";
};
