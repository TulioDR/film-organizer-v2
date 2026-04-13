export function onlyLettersNumbersSpaces(str: string) {
   return /^[A-Za-z0-9\s]*$/.test(str);
}
