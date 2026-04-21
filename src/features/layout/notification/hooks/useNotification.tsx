import useAppDispatch from "@/store/hooks/useAppDispatch";
import { notificationActions } from "@/store/slices/notification-slice";

export default function useNotification() {
   const dispatch = useAppDispatch();

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

   const showErrorNotification = (error: any) => {
      const success = false;
      setAndCloseNotification(error, success);
   };

   const showSuccessNotification = (message: string) => {
      const success = true;
      setAndCloseNotification(message, success);
   };

   return {
      closeNotification,
      showSuccessNotification,
      showErrorNotification,
   };
}
