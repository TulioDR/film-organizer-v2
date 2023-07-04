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

   return {
      setNotification,
      closeNotification,
      setAndCloseNotification,
   };
}
