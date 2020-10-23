import { useContext } from "react";
import { NotificationPosition, INotificationProps } from "./Notifications";
import { NotificationsContext } from "./NotificationsContext";

export const useNotifications = (): [
  (data: INotificationProps) => Promise<void>,
  React.Dispatch<NotificationPosition>
] =>
  useContext(NotificationsContext) as [
    (data: any) => Promise<void>,
    React.Dispatch<NotificationPosition>
  ];
