import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '@phobon/base';
import { Button } from '../Button';

import Notifications from './Notifications';
import useNotifications from './useNotifications';
import Flag from './Flag';

const NotificationsHelper = ({ notificationTypes }) => {
  const add = useNotifications();

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
  .add('Default', () => {
    const notificationTypes = [
      {
        label: 'Add notification',
        notification: { content: <ContentHelper heading="Notification heading Long heading long heading" />, timeout: 7000 },
      },
    ];
    return (
      <Notifications>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('Dismissable', () => {
    const notificationTypes = [
      {
        label: 'Add notification',
        notification: { content: <ContentHelper heading="Notification heading Long heading long heading"  />, canDismiss: true },
      },
    ];
    return (
      <Notifications timeout={30000}>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('Severities', () => {
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
        <NotificationsHelper timeout={3000} notificationTypes={notificationTypes} />
      </Notifications>
    );
  });