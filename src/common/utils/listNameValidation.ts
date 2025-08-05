export function onlyLettersNumbersSpaces(str: string) {
   return /^[A-Za-z0-9\s]*$/.test(str);
}

export default function listNameValidation(values: any) {
   let error: any = {};
   if (!values.name) {
      error.name = "Name required";
   } else if (!onlyLettersNumbersSpaces(values.name)) {
      error.name =
         "Invalid name, it should only contain letters, numbers and spaces";
   }
   return error;
}
