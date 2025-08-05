export const daysToRelease = (date: Date): number => {
   const now = new Date().getTime();
   const releaseDate = new Date(date).getTime();
   const delta = (releaseDate - now) / 1000;
   const daysToRelease = Math.floor(delta / 86400);
   return daysToRelease;
};

export const changeDateFormat = (date: Date): string => {
   return new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "utc",
   });
};

export const isReleased = (date: Date): boolean => {
   if (daysToRelease(date) <= 0) return true;
   else return false;
};
