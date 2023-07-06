import { notificationActions } from "@/store/slices/notification-slice";
import { useDispatch } from "react-redux";

export default function useNotification() {
   const dispatch = useDispatch();

   const setNotification = (message: string, success: boolean) => {
      dispatch(notificationActions.showNotification({ message, success }));
   };

   const closeNotification = () => {
      dispatch(notificationActions.hideNotification());
   };

   const setAndCloseNotification = (message: string, success: boolean) => {
      setNotification(message, success);
      setTimeout(() => closeNotification(), 3000);
   };

   const getErrorMessage = (code: string) => {
      if (code === "ER_DUP_ENTRY") {
         return "A list with that name already exist";
      } else if (code === "ER_DATA_TOO_LONG") {
         return "Name can't have more than 12 characters";
      } else {
         return "Something went wrong, please try again later";
      }
   };

   return {
      setNotification,
      closeNotification,
      setAndCloseNotification,
      getErrorMessage,
   };
}