import { useContext } from 'react';

import NotificationsContext from './NotificationsContext';

const useNotifications = () => useContext(NotificationsContext);

export default useNotifications;