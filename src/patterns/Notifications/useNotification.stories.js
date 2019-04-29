import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '@phobon/base';

import AlertDiamond from 'sli/lib/AlertDiamond';
import AlertTriangle from 'sli/lib/AlertTriangle';
import QuestionCircle from 'sli/lib/QuestionCircle';
import CheckCircle from 'sli/lib/CheckCircle';

import { Button, Message } from '../../components';

import Notifications from './Notifications';
import useNotifications from './useNotifications';

const variations = [
  'info', 'question', 'success', 'warning', 'error', 'neutral', 'dark',
];
const glyphs = {
  neutral: <QuestionCircle color="inherit" size={20} />,
  dark: <QuestionCircle color="inherit" size={20} />,
  info: <QuestionCircle color="inherit" size={20} />,
  question: <QuestionCircle color="inherit" size={20} />,
  success: <CheckCircle color="inherit" size={20} />,
  warning: <AlertTriangle color="inherit" size={20} />,
  error: <AlertDiamond color="inherit" size={20} />,
};

const NotificationsHelper = ({ notificationTypes, notificationPosition }) => {
  const [add, setPosition] = useNotifications();

  useEffect(() => notificationPosition && setPosition(notificationPosition), [notificationPosition]);

  const notificationTriggers = notificationTypes.map(n => (
    <Button key={n.label} onClick={() => add(n.notification)} mr={3}>{n.label}</Button>
  ));

  return notificationTriggers;
};

const ContentHelper = props => (
  <Message {...props}>
    <Text mb={2} fontSize={2} fontWeight="bold" color="inherit">Notification heading Long heading long heading</Text>
    <Text color="inherit">{Math.random()}</Text>
  </Message>
);

storiesOf('Patterns/Notifications', module)
  .add('With a defined timeout', () => {
    const notificationTypes = [
      {
        label: 'Add 7000ms notification',
        notification: { content: <ContentHelper />, timeout: 7000 },
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
        notification: { content:<ContentHelper />, canDismiss: true },
      },
    ];
    return (
      <Notifications timeout={30000}>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With different variations', () => {
    const notificationTypes = variations.map(v => ({
      label: `Add ${v}`,
      notification: { content: <ContentHelper variation={v} glyph={glyphs[v]} /> },
    }));
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
        notification: { content:<ContentHelper /> },
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
        notification: { content:<ContentHelper /> },
      },
    ];
    return (
      <Notifications timeout={3000}>
        <NotificationsHelper notificationTypes={notificationTypes} notificationPosition="top" />
      </Notifications>
    );
  })
  .add('With a provided promise to execute', () => {
    const notificationTypes = [
      {
        label: 'Add notification with promise',
        notification: { content: <ContentHelper />, promise: () => new Promise(resolve => setTimeout(() => resolve(true), 10000)) },
      },
    ];
    return (
      <Notifications>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  });