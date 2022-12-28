function onlyLettersAndNumbers(str: string) {
   return /^[A-Za-z0-9]*$/.test(str);
}

export default function listNameValidation(values: any) {
   console.log(values);
   let error: any = {};
   if (!values.name) {
      error.name = "Name required";
   } else if (!onlyLettersAndNumbers(values.name)) {
      error.name = "Invalid name, it should only contain letters and numbers";
   }
   return error;
}
