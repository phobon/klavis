import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '@phobon/base';

import AlertDiamond from '../../icons/AlertDiamond';
import AlertTriangle from '../../icons/AlertTriangle';
import QuestionCircle from '../../icons/QuestionCircle';
import CheckCircle from '../../icons/CheckCircle';

import { Button, Message } from '../../components';

import Notifications from './Notifications';
import useNotifications from './useNotifications';

const variants = [
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
const colors = {
  neutral: 'grayscale.9',
  dark: 'grayscale.9',
  info: 'blues.9',
  question: 'purples.9',
  success: 'greens.9',
  warning: 'oranges.9',
  error: 'reds.9',
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
  .add('With different timeouts', () => {
    const notificationTypes = [
      {
        label: 'Default timeout (10s)',
        notification: { content: <ContentHelper /> },
      },
      {
        label: '2000ms',
        notification: { content: <ContentHelper />, timeout: 2000 },
      },
      {
        label: '7000ms',
        notification: { content: <ContentHelper />, timeout: 7000 },
      },
    ];
    return (
      <Notifications>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With and without lifebars', () => {
    const notificationTypes = [
      {
        label: 'With lifebar',
        notification: { content: <ContentHelper /> },
      },
      {
        label: 'Without lifebar',
        notification: { content: <ContentHelper />, showLife: false },
      },
    ];
    return (
      <Notifications timeout={3000}>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  })
  .add('With different coloured lifebars', () => {
    const notificationTypes = [
      {
        label: 'oranges.5',
        notification: { content: <ContentHelper />, color: 'oranges.5' },
      },
      {
        label: 'blues.6',
        notification: { content: <ContentHelper />, color: 'blues.6' },
      },
      {
        label: 'purples.6',
        notification: { content: <ContentHelper />, color: 'purples.6' },
      },
    ];
    return (
      <Notifications timeout={2000}>
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
  .add('With different variants', () => {
    const notificationTypes = variants.map(v => ({
      label: `Add ${v}`,
      notification: { content: <ContentHelper variant={v} glyph={glyphs[v]} />, color: colors[v] },
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
        label: 'Add notification with a 3s promise',
        notification: { content: <ContentHelper />, promise: () => new Promise(resolve => setTimeout(() => resolve(true), 3000)) },
      },
    ];
    return (
      <Notifications showLife={false}>
        <NotificationsHelper notificationTypes={notificationTypes} />
      </Notifications>
    );
  });