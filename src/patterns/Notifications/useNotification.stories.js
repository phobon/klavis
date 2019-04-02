import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '@phobon/base';
import { Button } from '../../components';

import Notifications from './Notifications';
import useNotifications from './useNotifications';
import Flag from './Flag';

const NotificationsHelper = ({ notificationTypes, notificationPosition }) => {
  const [add, setPosition] = useNotifications();

  useEffect(() => notificationPosition && setPosition(notificationPosition), [notificationPosition]);

  const notificationTriggers = notificationTypes.map(n => (
    <Button key={n.label} onClick={() => add(n.notification)} mr={3}>{n.label}</Button>
  ));

  return notificationTriggers;
};

const ContentHelper = (props) => (
  <Flag {...props}>
    <Text color="grayscale.2">{Math.random()}</Text>
  </Flag>
);

storiesOf('Patterns/Notifications', module)
  .add('With a defined timeout', () => {
    const notificationTypes = [
      {
        label: 'Add 7000ms notification',
        notification: { content: <ContentHelper heading="Notification heading Long heading long heading" />, timeout: 7000 },
      },
    ];
    return (
      <Notifications>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With the ability to dismiss early', () => {
    const notificationTypes = [
      {
        label: 'Add dismissable notification',
        notification: { content: <ContentHelper heading="Notification heading Long heading long heading"  />, canDismiss: true },
      },
    ];
    return (
      <Notifications timeout={30000}>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With different severities', () => {
    const notificationTypes = [
      {
        label: 'Add info',
        notification: { content: <ContentHelper severity="info" /> },
      },
      {
        label: 'Add success',
        notification: { content: <ContentHelper severity="success" /> },
      },
      {
        label: 'Add warning',
        notification: { content: <ContentHelper severity="warning" /> },
      },
      {
        label: 'Add error',
        notification: { content: <ContentHelper severity="error" /> },
      },
    ];
    return (
      <Notifications timeout={3000}>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With different initial position', () => {
    const notificationTypes = [
      {
        label: 'Bottom',
        notification: { content: <ContentHelper /> },
      },
    ];
    return (
      <Notifications timeout={3000} notificationPosition="bottom">
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With custom position', () => {
    const notificationTypes = [
      {
        label: 'Top',
        notification: { content: <ContentHelper /> },
      },
    ];
    return (
      <Notifications timeout={3000}>
        <NotificationsHelper notificationTypes={notificationTypes}  notificationPosition="top" />
      </Notifications>
    );
  })
  .add('With a provided promise to execute', () => {
    const notificationTypes = [
      {
        label: 'Add notification with promise',
        notification: { content: <ContentHelper heading="Notification heading Long heading long heading" />, promise: () => new Promise((resolve, reject) => setTimeout(() => resolve(true), 10000)) },
      },
    ];
    return (
      <Notifications>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  });