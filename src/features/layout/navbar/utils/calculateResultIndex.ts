export default function calculateNewIndex(
   current: number | null,
   action: string,
   length: number,
   COLUMNS: number
): number | null {
   let newIndex = current;

   switch (action) {
      case "UP":
         if (current !== null && current < COLUMNS) newIndex = null;
         else if (current === null) newIndex = length - 1;
         else newIndex = current - COLUMNS;
         break;
      case "DOWN":
         if (current !== null && current >= length - COLUMNS) newIndex = null;
         else if (current === null) newIndex = 0;
         else newIndex = current + COLUMNS;
         break;
      case "RIGHT":
         if (current === length - 1) newIndex = 0;
         else if (current !== null) newIndex = current + 1;
         break;
      case "LEFT":
         if (current === 0) newIndex = length - 1;
         else if (current !== null) newIndex = current - 1;
         break;
   }
   return newIndex;
}
