import { onlyLettersNumbersSpaces } from "@/common/utils/onlyLettersNumbersSpaces";

export default function listNameValidation(value: string): null | string {
   let error = null;
   if (!value) {
      error = "Name required";
   } else if (!onlyLettersNumbersSpaces(value)) {
      error = "Name should only contain letters, numbers and spaces";
   }
   return error;
}
