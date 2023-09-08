export default function TryCatchWrapper(execute: () => void) {
   try {
      execute();
   } catch (error) {
      return error;
   }
}
