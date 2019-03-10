import React from 'react';
import { addDecorator, configure } from '@storybook/react';

import StoryBox from './StoryBox';

addDecorator(story => <StoryBox>{story()}</StoryBox>);

const src = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  src.keys().forEach((filename) => src(filename));
}

configure(loadStories, module);