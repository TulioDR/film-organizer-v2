const getActionKey = (key: string): string | undefined => {
   const keyMap: { [key: string]: string } = {
      ArrowUp: "UP",
      ArrowDown: "DOWN",
      ArrowLeft: "LEFT",
      ArrowRight: "RIGHT",
      Enter: "ENTER",
   };
   return keyMap[key];
};

export default getActionKey;
