export const daysToRelease = (date: string): number => {
   const now = new Date().getTime();
   const releaseDate = new Date(date).getTime();
   const delta = (releaseDate - now) / 1000;
   const daysToRelease = Math.floor(delta / 86400);
   return daysToRelease;
};

export const changeDateFormat = (date: string): string => {
   return new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "utc",
   });
};

export const isReleased = (date: string): boolean => {
   if (daysToRelease(date) <= 0) return true;
   else return false;
};
