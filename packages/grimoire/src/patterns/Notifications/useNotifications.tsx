import { useContext } from "react";

import { NotificationsContext } from "./NotificationsContext";

export const useNotifications = () => useContext(NotificationsContext);
